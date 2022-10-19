import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletedress, getAlldress } from "../../actions/dressAction";
import Loader from "../Loader";
import Error from "../Error";
import { Link } from "react-router-dom";

const Dresslist = () => {
  const dispatch = useDispatch();
  const dressstate = useSelector((state) => state.getAlldressReducer);
  const { loading, dresss, error } = dressstate;
  console.log(dresss);
  useEffect(() => {
    dispatch(getAlldress());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching dresss {error}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>dress Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dresss &&
                dresss.map((dress) => (
                  <tr>
                    <td>
                      <img
                        src={dress.image}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{dress.name}</td>
                    <td>
                      Small : {dress.prices[0]["small"]}
                      <br />
                      Medium : {dress.prices[0]["medium"]}
                      <br />
                      Large : {dress.prices[0]["large"]}
                    </td>
                    <td>{dress.category}</td>
                    <td>
                      <Link to={`/admin/editdress/${dress._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deletedress(dress._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Dresslist;
