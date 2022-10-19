import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterdress } from "../actions/dressAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="p-3 " >
      <Form>
        <Row style={{margin:"space-around"}}>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="serach dress"
            />
          </Col>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>men</option>
              <option>women</option>
            </select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterdress(searchkey, category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
