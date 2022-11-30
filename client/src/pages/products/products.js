import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./products.scss";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const catId = Number(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  
  const { data:dataPicCat, loading:loadingPicCat, error:errorPicCat } = useFetch(
    `/categories?populate=*&[filters][id][$eq]=${catId}`
  );

 


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };



  

  return (
    <>
     {errorPicCat
            ? "Something went wrong!"
            : loadingPicCat
            ? "loading..."
            :
            dataPicCat?.map((item1) => (
              <Helmet key={item1.id} >
              <title>{item1?.attributes?.title}</title>
              <meta name={item1?.attributes?.desc} content={item1?.attributes?.desc}/>
            </Helmet>
          ))}
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onClick={(e) => setSort("asc")}
                defaultChecked={true}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onClick={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          {errorPicCat
            ? "Something went wrong!"
            : loadingPicCat
            ? "loading..."
            :
            dataPicCat?.map((item1) => (
            <img
            key={item1.id}
            className="catImg"
            src={process.env.REACT_APP_UPLOAD_URL + item1?.attributes?.img?.data?.attributes?.url}
            alt=""
            loading="lazy"
          />
          ))}
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
    </>
  );
};

export default Products;
