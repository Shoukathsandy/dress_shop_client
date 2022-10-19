import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAlldress } from "../actions/dressAction";
import Dress from "../components/Dress";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const dresstate = useSelector((state) => state.getAlldressReducer);
  const { loading, dresss, error } = dresstate;
  // console.log(dresss);
  useEffect(() => {
    dispatch(getAlldress());
  }, [dispatch]);

  return (
    <>
    <div className="row">
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching dresss {error}</Error>
        ) : (
          <Row>
            <Filters />
            {dresss.map((dress) => (
              <div className="col-4" key={dress.name}>
              
                <Dress dress={dress} />
              
              </div>
            ))}
          </Row>
        )}
      </Container>
      </div>
    </>
  );
};

export default HomeScreen;
