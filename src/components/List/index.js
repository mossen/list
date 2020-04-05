import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import Loading from "../Loading";
import Item from "../Item";

const List = (props) => {
  const { items, isLoading, loadMoreHandler } = props;
  const handleScroll = (event) => {
    if (!props.canLoadMore) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollHeight <= scrollTop + clientHeight) {
      loadMoreHandler();
    }
  };

  /*
  * Improving performance to reduce calling this
  * function when items remains unchanged
  */
  const itemElements = useMemo(
    () => items && items.map((user) => (
      <Item
        key={user.id}
        avatar={user.avatar}
        fullName={`${user.first_name} ${user.last_name}`}
      />
    )),
    [items]
  );

  return (
    <div className="flex justify-center">
      <Card
        onScroll={handleScroll}
        className="m-2 mt-10 max-w-full bg-white rounded overflow-scroll shadow-lg"
      >
        {itemElements}
        <Loading show={isLoading} className="mb-4" />
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
  loadMoreHandler: null,
  isLoading: false
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  canLoadMore: PropTypes.bool,
  loadMoreHandler: PropTypes.func,
  isLoading: PropTypes.bool
};

export default List;
