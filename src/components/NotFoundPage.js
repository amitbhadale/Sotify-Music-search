import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      Page Not Found. Go to <Link to="/dashboard">Home Page</Link>
    </>
  );
};

export default NotFoundPage;
