import React, { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/Redux/cartReducer";
import { Helmet } from "react-helmet-async";

const Product = () => {
  const id = Number(useParams().id);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);


 

  return (
    <>
     <Helmet>
        <title>{data?.attributes?.title}</title>
        <meta name={data?.attributes?.desc} content={data?.attributes?.desc}/>
      </Helmet>
      <div className="product">
        {loading ? (
          "loading..."
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                  loading="lazy"
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                  loading="lazy"
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">JOD{data?.attributes?.price}</span>
              <p>
                {data?.attributes?.desc}
              </p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              </div>
              <button className="add" onClick={()=>dispatch(addToCart({
                id: data.id,
                title:data.attributes.title,
                desc:data.attributes.desc,
                price:data.attributes.price,
                img:data.attributes.img.data.attributes.url,
                quantity
              }))}>
                <AddShoppingCartIcon />
                <p>ADD TO CART</p>
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISH LIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="info">
                <span>Vendor:{data?.attributes?.vendor}</span>
                <span>Product Type: {data?.attributes?.title}</span>
                <span>Taq: {data?.attributes?.sub_categories?.data[0]?.attributes.title}, {data?.attributes?.categories?.data[0]?.attributes?.title}</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
