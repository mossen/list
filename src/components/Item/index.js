import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Item = (props) => {
  const { avatar, fullName } = props;
  return (
    <Wrapper className="w-full h-12 flex items-center px-4 py-3 hover:bg-teal-100 cursor-pointer">
      {avatar && (
        <img
          className="rounded-full w-6 mr-2"
          src={avatar}
          alt={fullName}
        />
      )}
      <p className="text-sm">{fullName}</p>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  border-bottom: 1px solid #E9EDF0;
`;

Item.defaultProps = {
  avatar: null
};

Item.propTypes = {
  avatar: PropTypes.string,
  fullName: PropTypes.string.isRequired
};

export default Item;
