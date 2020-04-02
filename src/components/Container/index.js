import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";

const Container = props => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container;
