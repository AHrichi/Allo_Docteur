import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleterec, getallrec } from "../Redux/actions/rec";

const AdminReport = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallrec());
  }, []);

  const [inputText, settext] = useState("");
  const recall = useSelector((state) => state.recReducer.result);
  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          onChange={(e) => settext(e.target.value)}
          style={{ marginTop: "25px", width: "400px", height: "25px" }}
        />
      </div>
      <div className=" m-5">
      <table className="ui celled table">
        <thead>
          <tr>
            <th></th>
            <th>_id</th>
            <th>Client_name</th>
            <th>Client_id</th>
            <th>Title</th>
            <th>Object</th>
          </tr>
        </thead>

        <tbody>
          {recall
            ? recall
                .filter((el) =>
                  el.client_name.toLowerCase().includes(inputText.toLowerCase())
                )
                .map((el) => (
                  <tr>
                    <td
                      data-label="_id"
                      onClick={() => dispatch(deleterec(el._id))}
                    >
                      {" "}
                      <i class="trash alternate outline icon"></i>
                    </td>

                    <td data-label="_id">{el._id}</td>
                    <td data-label="Is Admin ?">{el.client_name}</td>
                    <td data-label="Name">{el.client_id}</td>
                    <td data-label="Last Name">{el.title}</td>
                    <td data-label="Email">{el.object}</td>
                  </tr>
                ))
            : "LOADING"}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AdminReport;
