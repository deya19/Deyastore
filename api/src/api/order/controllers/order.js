("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi  // comes from db
          .service("api::product.product")
          .findOne(product.id);

        return {
          price_data: {
            currency: "jod",
            product_data: {
              name: item.title,
            },
            unit_amount: Math.round(item.price * 1000), // 100 because by default stripe take the value in cent
          },
          quantity: product.quantity,
        };
      })
    );
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?canceled=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["JO"] }, //if you are not sending products world wide just write code
        payment_method_types: ["card"], // using only credit card
        phone_number_collection: {
          enabled: true,
        },
      });

      await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return {stripeSession:session};
    } catch (error) {
      ctx.response.status = 500; //server error
      return error;
    }
  },
}));
