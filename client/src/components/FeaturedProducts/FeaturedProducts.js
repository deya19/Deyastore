import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  ); // to get the media and filter with type

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime
          Excepturi expedita fuga nulla molestias labore perspiciatis quisquam
          culpa. Assumenda placeat quaerat earum eveniet dignissimos,
          consequatur reprehenderit laboriosam unde, omnis debitis saepe
          nihil,inventore totam et nostrum .
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
