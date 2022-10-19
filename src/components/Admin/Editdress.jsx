import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getdressById, updatedress } from "../../actions/dressAction";
import Loader from "../Loader";
import Error from "../Error";

const Editdress = ({ match }) => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [largprice, setlargprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const dispatch = useDispatch();
  const getdressByState = useSelector((state) => state.getdressByIdReducer);
  const { error, dress } = getdressByState;
  const updatedressState = useSelector((state) => state.updatedressByIdReducer);
  const { updateloading } = updatedressState;
  useEffect(() => {
    if (dress) {
      if (dress._id === match.params.dressId) {
        setname(dress.name);
        setdescription(dress.description);
        setcategory(dress.category);
        setimage(dress.image);
        setsmallPrice(dress.prices[0]["small"]);
        setmediumPrice(dress.prices[0]["medium"]);
        setlargprice(dress.prices[0]["large"]);
      } else {
        dispatch(getdressById(match.params.dressId));
      }
    } else {
      dispatch(getdressById(match.params.dressId));
    }
  }, [dress, dispatch, match.params.dressId]);
  const submitForm = (e) => {
    e.preventDefault();
    const updateddress = {
      _id: match.params.dressId,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        larg: largprice,
      },
    };
    dispatch(updatedress(updateddress));
  };
  return (
    <div>
      {updateloading && <Loader />}
      {error && <Error error="add new dress error" />}
      {/* {success && <Success success="dress Added Successfully" />} */}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setsmallPrice(e.target.value)}
                placeholder="Enter Small Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setmediumPrice(e.target.value)}
                placeholder="Enter medium price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Larg Price</Form.Label>
              <Form.Control
                type="text"
                value={largprice}
                onChange={(e) => setlargprice(e.target.value)}
                placeholder="Enter larg price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              ttype="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update dress
        </Button>
      </Form>
    </div>
  );
};

export default Editdress;
