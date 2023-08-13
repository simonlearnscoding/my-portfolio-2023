import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Simone Muscas Web Developer</title>
    </Helmet>
  );
};

export default PageTitle;
