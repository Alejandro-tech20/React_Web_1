import React from "react";
import PropTypes from "prop-types";
import "./ListResult.css";
import Card from "../Card/Card";

const ListResult = () => (
  <div className="ListResult">
    <Card />
    <Card/>
    <Card/>
  </div>
);

ListResult.propTypes = {};

ListResult.defaultProps = {};

export default ListResult;
