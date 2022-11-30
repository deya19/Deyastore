import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./home.scss";
import { Helmet } from "react-helmet-async";


const Home = ({contactRef,storesRef}) => {
  return (
    <>
     <Helmet>
        <title>Home</title>
        <meta name="This stores contain every good products such as shoes,shirts,glasses...." content="Home"/>
      </Helmet>
      <div className="home">
        <Slider />
        <FeaturedProducts type="featured"/>
        <Categories storesRef={storesRef}/>
        <FeaturedProducts type="trending"/>
        <Contact/>
      </div>
    </>
  );
};

export default Home;
