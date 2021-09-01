import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleterdv, getallrdv } from "../Redux/actions/rdv";

import { Row, Col } from "react-bootstrap";

const AdminRdv = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      
      dispatch(getallrdv());
    }, []);

    const rdvadmin = useSelector((state) => state.rdvReducer.result);

    const [inputText, settext] = useState("");

    return (
        <div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <input onChange={(e) => settext(e.target.value)}
        style={{ marginTop: "25px", width: "400px", height: "25px" }}/>
          </div>
            
            <Row>
            <Col className="my-5 mx-5">
          <table className="ui celled table">
            <thead>
              <tr>
              <th></th>
                <th>_id</th>
                <th>Client_name</th>
                <th>Client_id</th>
                <th>Doctor_name</th>
                <th>Doctor_id</th>
                <th>Date</th>
                <th>Approved ?</th>
              </tr>
            </thead>

            <tbody>
              {rdvadmin
                ? rdvadmin.filter((el) =>
                el.client_name.toLowerCase().includes(inputText.toLowerCase()) ||
                el.doc_name
                  .toLowerCase()
                  .includes(inputText.toLowerCase())).map((el) => (
                    <tr>
                      <td
                        data-label="_id"
                        onClick={() => dispatch(deleterdv(el._id))}
                      >
                        {" "}
                        <i class="trash alternate outline icon"></i>
                      </td>
                      <td data-label="_id">{el._id}</td>
                      <td data-label="Is Admin ?">{el.client_name}</td>
                      <td data-label="Name">{el.client_id}</td>
                      <td data-label="Last Name">{el.doc_name}</td>
                      <td data-label="Email">{el.doc_id}</td>
                      <td data-label="Profession">{el.date}</td>
                      <td data-label="Ville">{el.approved.toString()}</td>
                    </tr>
                  ))
                : "LOADING"}
            </tbody>
          </table>
        </Col>
        </Row>
        </div>
    )
}

export default AdminRdv
