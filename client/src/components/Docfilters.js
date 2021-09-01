import React from "react";
import { getalldoctors } from "../Redux/actions/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Docard from "./Docard";
const Docfilters = (props) => {
  const doc = useSelector((state) => state.userReducer.Doc);

  console.log(props.location.filterProps.filterText);
  console.log(props.location.filterProps.specialitéText);
  console.log(`Dr ${doc[0].name} ${doc[0].lastName}`);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getalldoctors());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "10px",
      }}
    >
      {doc
        .filter(
          (el) =>
           ( `Dr ${el.name} ${el.lastName}` ==
              props.location.filterProps.filterText) ||
            (el.specialité == props.location.filterProps.specialitéText) || (el.ville == props.location.filterProps.regionText)
        )
        .map((el) => (
          <Docard key={el._id} el={el} />
        ))}
    </div>
  );
};

export default Docfilters;
