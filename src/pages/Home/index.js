import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../components/Container";
import List from "../../components/List";
import { types } from "../../redux/types/usersTypes";

/* 
* This is a page component which handles dispatching an action to get users from an API.
* It requests again with 5 more records each time List component gets scrolled to the bottom.
*/
const Home = () => {
  const [perPage, setPerPage] = useState(5);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.USERS.REQUEST, payload: { per_page: perPage } });
  }, [dispatch, perPage]);

  const handleLoadMore = () => setPerPage(perPage + 5);

  return (
    <Container>
      <List
        items={users.data}
        loadMoreHandler={handleLoadMore}
        canLoadMore={users.total_pages > 1}
        isLoading={users.loading}
      />
    </Container>
  );
};

export default Home;
