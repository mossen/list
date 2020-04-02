import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as LoadingSvg } from "../../assets/loading.svg";

const Loading = props => {
  return (
    props.show && (
      <div className={props.className}>
        <LoadingSvg height={props.height} width={props.width} />
      </div>
    )
  );
};

Loading.defaultProps = {
  className: "",
  with: "2rem",
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
