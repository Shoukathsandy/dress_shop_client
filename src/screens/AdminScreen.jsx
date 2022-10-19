import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddNewdress from "../components/Admin/AddNewDress";
import OrderList from "../components/Admin/OrderList";
import Dresslist from "../components/Admin/Dresslist";
import Userlist from "../components/Admin/Userlist";
import Editdress from "./../components/Admin/Editdress";
const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-light text-danger p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "200px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/dresslist")}>
                All dresss
              </Button>
              <Button onClick={() => history.push("/admin/addnewdress")}>
                Add New dress
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
            
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={Userlist} exact />
              <Route path="/admin/userlist" component={Userlist} exact />
              <Route
                path="/admin/editdress/:dressId"
                component={Editdress}
                exact
              />
              <Route path="/admin/dresslist" component={Dresslist} exact />
              <Route path="/admin/addnewdress" component={AddNewdress} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
