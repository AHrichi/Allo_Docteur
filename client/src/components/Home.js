import React, { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import VerticalTab from "./VerticalTab";
import Serchlive from "./Serchlive";
import { useDispatch, useSelector } from "react-redux";
import Serchlive1 from "./Search/serchlive1";
import Serchlive2 from "./Search/serchlive2";
import { getalldoctors } from "../Redux/actions/user";
import { Link } from "react-router-dom";
import { Col, Form, Row, Container } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import CheckIcon from "@material-ui/icons/Check";
import Footer from "./Footer";
import alodoc from "./alodoc.png";
import firstimg from "./first-img.png";
import secondimg from "./secondimg.png";
import thirdimg from "./thirdimg.png";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getalldoctors());
  }, [data]);
  const med = useSelector((state) => state.userReducer.Doc);

  const data = med ? (
    med.map((el) => "Dr" + " " + el.name + " " + el.lastName)
  ) : (
    <h1>loading</h1>
  );
  const specilaité = [
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

  const region = [
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

  const [filterText, setfilterText] = useState();
  const textFilter = (newtext) => {
    setfilterText(newtext);
  };
  const [specialitéText, setspecialitéText] = useState();
  const textSpecialité = (newSpecText) => {
    setspecialitéText(newSpecText);
  };

  const [regionText, setregionText] = useState();
  const textRegion = (newRegionText) => {
    setregionText(newRegionText);
  };
  return (
    <div className="backApp">
      
      <Container>
        <Container>
          <Row
            className="hero"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col>
              <h1 className="st-paragraphe">
                <strong>
                  Le site de prise <br />
                  de rendez-vous{" "}
                </strong>{" "}
                <br />
                <h2
                  style={{ fontSize: "30px", fontFamily: "Roboto, sans-serif" }}
                >
                  Rechercher un Medecin
                </h2>
              </h1>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col>
              <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <h3 style={{ color: "black" }}>Par son Nom</h3>
                </Form.Group>
              </Form>
              <Serchlive
                textFilter={textFilter}
                placeholder={" Rechercher un Medecin"}
                data={data}
              />
            </Col>

            <Col>
              <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <h3 style={{ color: "black" }}> Par sa Spécialité</h3>
                </Form.Group>
              </Form>
              <Serchlive1
                textSpecialité={textSpecialité}
                placeholder={" Rechercher une specialité"}
                data={specilaité}
              />
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <h3 style={{ color: "black" }}>Par sa Région</h3>
                </Form.Group>
              </Form>
              <Serchlive2
                placeholder={"Region"}
                data={region}
                textRegion={textRegion}
              />
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                </Form.Group>
              </Form>
              <Link
                to={{
                  pathname: "/filter",
                  filterProps: {
                    filterText: filterText,
                    specialitéText: specialitéText,
                    regionText: regionText,
                  },
                }}
              >
                <button
                  style={{
                    height: "60px",
                    borderRadius: "10px",
                    width: "250px",
                    backgroundColor: "rgb(50, 157, 156)",
                  }}
                >
                  Rechercher
                </button>
              </Link>
            </Col>
          </Row>

          {/* <input
        type="text"
        placeholder="Medecin, établissement,specialité"
        style={{ width: "30%" }}
      /> */}
          {/* <input type="text " placeholder="Region" /> */}
        </div>
        <h1 style={{ fontSize: "30px" }}>Comment ça fonctionne ?</h1>

        <h4>
          Allodocteur pour les professionnels, c’est un ensemble de services et
          d’accompagnement quotidien.
        </h4>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Col>
            <img src={firstimg} alt="img not trouvée" />
            {/* < CreateIcon className='icone-size'/> */}
            <h5>Je créé un compte</h5>
          </Col>
          <Col>
            <img src={secondimg} alt="img not trouvée" />
            {/* <SearchIcon/> */}
            <h5>Je recherche une spécialité</h5>
          </Col>
          <Col>
            <img src={thirdimg} alt="img not trouvée" />
            {/* <CheckIcon /> */}
            <h5>Je choisis mon praticien</h5>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <img src={alodoc} />
          </Col>

          <Col className="d-flex align-items-center">
            <div>
              <h2>Pourquoi choisir AlloDocteur.fr ?</h2>
              <h3>Créez un compte pour votre famille ou vos proches</h3>
              <p
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  color: "#4b597b",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "calc(24/16)",
                }}
              >
                Le service AlloDocteur est accessible pour vous et vos proches.
                En créant un compte familial, vous simplifiez vos démarches et
                vos parcours de soins. Profitez également gratuitement du carnet
                de vaccination électronique via mesvaccins.net.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center">
            <div>
              <h3>Gagnez du temps, prenez rendez-vous avec vos praticiens</h3>
              <p
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  color: "#4b597b",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "calc(24/16)",
                }}
              >
                Si votre praticien a souscrit à une offre de prise de
                rendez-vous en ligne (Allodocteur ou autre) vous pourrez
                réserver votre créneau en quelques clics. S’il n’a pas souscrit
                à un service sur internet, un de nos conseillers se charge de
                toutes les démarches pour vous.
              </p>
            </div>
          </Col>
          <Col>
            <img src="https://allodocteur.fr/media/img/illustration-doctor.png?h=b7ddbd16e5dc2cd545fd3a16916175a9" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="https://allodocteur.fr/media/img/illustration-assistance.png?h=3949cbe6310cab97cb161c66d9c41525" />
          </Col>
          <Col className="d-flex align-items-center">
            <div>
              <h3>Faites appel à notre service de conciergerie</h3>

              <p
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  color: "#4b597b",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "calc(24/16)",
                }}
              >
                Si vous n’en avez pas le temps ou la possibilité, un opérateur
                AlloDocteur peut se charger d’appeler les secrétariats et
                prendre vos rendez-vous à votre place.
              </p>
            </div>
          </Col>
        </Row>
        <h4>Les praticiens témoignent</h4>
        <p
          style={{
            fontFamily: "IBM Plex Sans,sans-serif",
            color: "#4b597b",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "calc(24/16)",
          }}
        >
          Des praticiens présents sur AlloDocteur.fr témoignent sur le site.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Cards />
        </div>
        <img src="https://allodocteur.fr/media/img/illustration-faq.svg?h=b5809bdb5b9d1536b768e77e7a1b001d" />
        <h3>FAQ</h3>
        <p
          style={{
            fontFamily: "IBM Plex Sans,sans-serif",
            color: "#4b597b",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "calc(24/16)",
          }}
        >
          Une question sur Allodocteur ?
        </p>
        <div style={{ margin: "25px 70px" }}>
          <VerticalTab />
        </div>

        <div>
          <h1>A propos DOCTOLIB</h1>
          <p
            style={{
              fontFamily: "IBM Plex Sans,sans-serif",
              color: "#4b597b",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "calc(24/16)",
            }}
          >
            AlloDocteur s’est donné pour mission de faciliter l’accès aux soins
            des patients. Pour délivrer l’information la plus complète qui soit,
            nous proposons sur notre site l’annuaire public des professions
            médicales et paramédicales référencées sur les sites officiels.
          </p>
          <br />
          <p
            style={{
              fontFamily: "IBM Plex Sans,sans-serif",
              color: "#4b597b",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "calc(24/16)",
            }}
          >
            AlloDocteur.fr n'utilise pas vos données médicales à des fins autres
            que la prise de rendez-vous et celles-ci ne sont pas réutilisées
            dans le cadre d’autres projets.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
