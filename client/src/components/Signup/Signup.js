import React from "react";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../Redux/actions/user";
import { useHistory } from "react-router-dom";

import "./Signup.css";
const Signup = () => {
  
    
  // };
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [profession, setProfession] = useState();
  const [specialité, setSpecialité] = useState();
  const [ville, setVille] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const villes = [
    "tunis",
    "ariana",
    "ben arous",
    "manouba",
    "benzart",
    "kef",
    "jendouba",
    "guasrine",
    "jendouba",
    "seliana",
    "nabeul",
    "sfax",
    "sousse",
    "mestir",
    "mehdia",
    "kairouane",
    "gafsa",
    "gabes",
    "guebili",
    "tozeur",
    "medenine",
    "tataouine",
    "zaghouane",
    "sidi bouzid",
  ];
  const specilaités = [
    "L’allergologie ou l’immunologie",
    "L’anesthésiologie",
    "L’andrologie",
    "cardiologie",
    "chirurgie",
    "chirurgie cardiaque",
    "chirurgie esthétique, plastique et reconstructive",
    "chirurgie générale",
    "chirurgie maxillo-faciale",
    "chirurgie pédiatrique",
    "chirurgie thoracique",
    "chirurgie vasculaire",
    "neurochirurgie",
    "dermatologie",
    "L’endocrinologie",
    "gastro-entérologie",
    "gériatrie",
    "gynécologie",
    "L’hématologie",
    "L’hépatologie",
    "L’infectiologie",
    "médecine aiguë",
    " médecine du travail",
    "médecine générale",
    "médecine interne",
    "médecine nucléaire",
    "médecine palliative",
    "médecine physique",
    "médecine préventive",
    "néonatologie",
    "néphrologie",
    "neurologie",
    "L’odontologie",
    "L’oncologie",
    "L’obstétrique",
    "L’ophtalmologie",
    "L’orthopédie",
    "L’Oto-rhino-laryngologie",
    "pédiatrie",
    "pneumologie",
    "psychiatrie",
    "radiologie",
    "radiothérapie",
    "rhumatologie",
    "L’urologie",
  ];

  return (
    
    <div className='login-jpj'>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          {/* Login Form */}
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon" /> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign In"
                  onClick={() =>
                    dispatch(loginUser({ email, password }, history))
                  }
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            {/* sign up part */}
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Name
                </label>
                <input
                  id="user"
                  type="text"
                  
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="lastName" className="label">
                  lastName
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>


              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="group">
              <label htmlFor="pass" className="label">
                  Ville
                </label>
                <select
                  className="input"
                  
                  onChange={(e) => setVille(e.target.value)}
                >
                  <option   value="">Ville</option>
                  {villes.map((el) => (
                    <option className="option"  value={el}>{el}</option>
                  ))}
                </select>
              </div>

              <div className="group">
              <label htmlFor="pass" className="label">
                  Profession
                </label>
                <select
                  className="input"
                  
                  onChange={(e) => setProfession(e.target.value)}
                >
                  <option className="option" value="">profession</option>
                  <option className="option" value="Client">Client</option>
                  <option className="option" value="Doctor">Doctor</option>
                </select>
              </div>
              
              {profession == "Doctor" ? (<div className="group">
                <label htmlFor="pass" className="label">
                  Specialité
                </label>
                <select
                  className="input"
                  
                  onChange={(e) => setSpecialité(e.target.value)}
                >
                  {specilaités.map((el) => (
                    <option   className="option" value={el}>{el}</option>
                  ))}
                </select>
                </div>
              ) : null}
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign Up"
                  onClick={() =>
                    dispatch(
                      registerUser(
                        {
                          name,
                          lastName,
                          email,
                          password,
                          profession,
                          specialité,
                          ville,
                        },
                        history
                      )
                    )
                  }
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );

  
};

export default Signup;
