import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import Loading from "../Loading";
import Item from "../Item";

const List = props => {
  const handleScroll = event => {
    if (!props.canLoadMore) {
      return;
    }
    
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollHeight <= scrollTop + clientHeight) {
      props.loadMoreHandler();
    }
  };

  return (
    <div className="flex justify-center">
      <Card
        onScroll={handleScroll}
        className="m-2 mt-10 max-w-full bg-white rounded overflow-scroll shadow-lg"
      >
        {props.items &&
          props.items.map((user, key) => (
            <Item
              key={key}
              avatar={user.avatar}
              fullName={`${user.first_name} ${user.last_name}`}
            />
          ))}
        <Loading show={props.isLoading} className="mb-4" />
      </Card>
    </div>
  );
};

const Card = Styled.div`
  width: 21.25rem;
  height: 14.06rem;
`;

List.defaultProps = {
  items: null,
  canLoadMore: false,
  loadMoreHandler: null
};

List.propTypes = {
  items: PropTypes.array,
  canLoadMore: PropTypes.bool,
  loadMoreHandler: PropTypes.func
};

export default List;
