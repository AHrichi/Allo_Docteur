import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { postrdv } from "../Redux/actions/rdv";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./FormProfile.css";
const RdvForm = ({ profile }) => {
  const location = useLocation();
  const profile1 = location.profile;
  console.log("aaaaaaaa", profile1.name);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.result);

  const [rdvstate, setrdvstate] = useState({
    client_name: "",
    doc_name: "",
    date: "",
    client_id: "",
    doc_id: "",
  });

  useEffect(() => {
    setrdvstate({
      ...rdvstate,
      doc_id: profile1 ? profile1._id : "",
      doc_name: profile1 ? `${profile1.name} ${profile1.lastName}` : "",
      client_name: currentUser
        ? `${currentUser.name} ${currentUser.lastName}`
        : "",
      client_id: currentUser ? currentUser._id : "",
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setrdvstate({ ...rdvstate, [e.target.name]: e.target.value });
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div className="center">
        <h1>Prenez un Rendez-vous</h1>
        <form>
          <div className="inputbox">
            <input
              type="text"
              required="required"
              name="client_name"
              value={`${currentUser.name} ${currentUser.lastName}`}
            />
            <span>client name</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              required="required"
              value={`${profile1.name} ${profile1.lastName}`}
              name="doc_name"
            />
            <span>doctor name</span>
          </div>
          <div className="inputbox">
            <form className={classes.container} noValidate>
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue=""
                name="date"
                onChange={handleChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
            <span> date</span>
          </div>

          <div className="inputbox">
            <Link to={"/dashboard"}>
              <button onClick={() => dispatch(postrdv(rdvstate))}>
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RdvForm;
