import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Item = props => {
  return (
    <Wrapper className="w-full h-12 flex items-center px-4 py-3 hover:bg-teal-100 cursor-pointer">
      {props.avatar && (
        <img
          className="rounded-full w-6 mr-2"
          src={props.avatar}
          alt={props.fullName}
        />
      )}
      <p className="text-sm">{props.fullName}</p>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  border-bottom: 1px solid #E9EDF0;
`;

Item.propTypes = {
  avatar: PropTypes.string,
  fullName: PropTypes.string.isRequired
};

export default Item;
