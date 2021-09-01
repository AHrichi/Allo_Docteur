import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, getallclients } from "../Redux/actions/user";
const AdminClient = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallclients());
  }, []);
  const Clients = useSelector((state) => state.userReducer.client);
  const [inputText, settext] = useState("");
  //   const handleChange=(e)=>{
  //       settext({...inputText,[e.target.name]:e.target.value})
  //   }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          onChange={(e) => settext(e.target.value)}
          style={{ marginTop: "25px", width: "400px", height: "25px" }}
        />
      </div>

      <Row>
        <Col className="my-5 mx-5">
          <table className="ui celled table">
            <thead>
              <tr>
                <th></th>
                <th>_id</th>
                <th>Is Admin ?</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Profession</th>
                <th>Ville</th>
              </tr>
            </thead>

            <tbody>
              {Clients
                ? Clients.filter(
                    (el) =>
                      el.name.toLowerCase().includes(inputText.toLowerCase()) ||
                      el.lastName
                        .toLowerCase()
                        .includes(inputText.toLowerCase()) ||
                      el.ville.toLowerCase().includes(inputText.toLowerCase())
                  ).map((el) => (
                    <tr>
                      <td
                        data-label="_id"
                        onClick={() => dispatch(deleteuser(el._id))}
                      >
                        {" "}
                        <i class="trash alternate outline icon"></i>
                      </td>
                      <td data-label="_id">{el._id}</td>
                      <td data-label="Is Admin ?">{el.isAdmin.toString()}</td>
                      <td data-label="Name">{el.name}</td>
                      <td data-label="Last Name">{el.lastName}</td>
                      <td data-label="Email">{el.email}</td>
                      <td data-label="Profession">{el.profession}</td>
                      <td data-label="Ville">{el.ville}</td>
                    </tr>
                  ))
                : "LOADING"}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminClient;
