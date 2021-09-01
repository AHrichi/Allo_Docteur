import React  from "react";
import './DocProfile.css'
import {useSelector} from 'react-redux'
import { Row, Container, Col, Image, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {Link} from 'react-router-dom'

const DocProfile = (props)=> {
  const profile = props.location.profileProps.el ;
  console.log(profile)
  const position = [33, 10];
  const isAuth2 = useSelector(state => state.userReducer.isAuth)
  return (
    <div className="profile-card">
      <Container fluid>
        <Row className="mt-4">
          <Col xs={1}>
            <Image
              style={{ width: "110px", height: "110px", borderRadius: "6px" }}
              src="https://images-ext-1.discordapp.net/external/1cKCn12qUhyUNtTTPOUvsOhv7iHjbQzzvdNN8IpfgVg/https/react.semantic-ui.com/images/avatar/large/steve.jpg?width=452&height=452"
            />
          </Col>
          <Col xs={8} className="d-flex flex-column align-items-start">
            <Row>
              <h1>
                Dr {profile.name} {profile.lastName}
              </h1>
            </Row>
            <Row>
              <h2>{profile.specialité}</h2>
            </Row>
            <Row>
              <h3>{profile.email}</h3>
            </Row>
            <Row>
              <h4>{profile.ville}</h4>
            </Row>
          </Col>
          <Col className="d-flex align-items-center">
            {isAuth2?
            <Link to={{pathname:"/rdvform",profile:profile}}>
            <Button variant="warning">Prenez un Rendez Vous </Button>
            </Link>:
            <Link to = {"/signup"}>
            <Button variant="warning">Prenez un Rendez Vous </Button>
            </Link>}
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <h1>Informations de contact</h1>
            <Button>Envoyer un Message</Button>
            <p>Adress</p>
          </Col>
          <Col style={{ overflow: "hidden" }}>
            <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <h1>Horaires d'ouvertures</h1>

        <Row className="d-flex justify-content-around">
          <Col className="d-flex justify-content-start">Lundi</Col>
          <Col className="d-flex justify-content-end">11:00 > 17:00</Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">Mercredi</Col>
          <Col className="d-flex justify-content-end">11:00 > 17:00</Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">Vendredi</Col>
          <Col className="d-flex justify-content-end">11:00 > 17:00</Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">Samedi</Col>
          <Col className="d-flex justify-content-end">11:00 > 17:00</Col>
        </Row>
      </Container>
    </div>
  );
};

export default DocProfile;
