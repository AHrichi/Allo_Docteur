import React from "react";
import "./GetAllDoctors.css";
import { currentUser, getalldoctors } from "../Redux/actions/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Docard from "./Docard";
const GetallDoctors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getalldoctors());
  }, []);

  const doc = useSelector((state) => state.userReducer.Doc);
  const currentDoc = useSelector((state) => state.userReducer.result);

  return (
    <div className="alldoctor">
      {currentDoc ? (
        <div
          className="alldoctor"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          {doc
            .filter((el) => el.Approved == true && el._id != currentDoc._id)
            .map((el) => (
              <Docard key={el._id} el={el} />
            ))}
        </div>
      ) : (
        <div
          
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          {doc
            .filter((el) => el.Approved == true)
            .map((el) => (
              <Docard key={el._id} el={el} />
            ))}
        </div>
      )}
    </div>
  );
};

export default GetallDoctors;
