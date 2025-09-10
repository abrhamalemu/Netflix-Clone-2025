import React from "react";
import { Header } from "../../componants/Header/Header";
import { Footer } from "../../componants/Footer/Footer";
import Banner from "../../componants/banner/Banner";
import RowList from "../../componants/Row/RowList/RowList";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};
