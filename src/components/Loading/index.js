import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as LoadingSvg } from "../../assets/loading.svg";

const Loading = (props) => {
  const {
    className,
    height,
    width,
    show
  } = props;

  return (
    show && (
      <div className={className}>
        <LoadingSvg height={height} width={width} />
      </div>
    )
  );
};

Loading.defaultProps = {
  className: "",
  width: "2rem",
  height: "2rem",
  show: true
};

Loading.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  show: PropTypes.bool
};

export default Loading;
