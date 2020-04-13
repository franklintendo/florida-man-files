import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return(
        <Container fluid className="h-100 w-100 florida__home--container">
            <Row className="h-100 justify-content-center">

                {/* <Col className="col-12 col-md-8 col-lg-4 florida__mugshot--container">
                    <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img rounded-circle my-auto d-block" />

                    <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img rounded-circle my-auto mx-auto d-block" />
                </Col> */}
                <Col className="col-auto my-auto mx-auto florida__mugshot--container">
                    <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img rounded-circle" />
                    
                    <img src={require('../img/mugshot/ben-jenkins.png')} alt="Ben Jenkins" className="florida__mugshot--img rounded-circle" />

                    <img src={require('../img/mugshot/albert-alvarez.png')} alt="Albert Alvarez" className="florida__mugshot--img rounded-circle" />

                    <img src={require('../img/mugshot/joel-jennings.png')} alt="Joel Jennings" className="florida__mugshot--img rounded-circle" />

                    <img src={require('../img/mugshot/carl-skippins.png')} alt="Carl Skippins" className="florida__mugshot--img rounded-circle" />

                    <img src={require('../img/mugshot/herman-douglas.png')} alt="Herman Douglas" className="florida__mugshot--img rounded-circle" />

                    <img src={require('../img/mugshot/dewey-fleming.png')} alt="Dewey Fleming" className="florida__mugshot--img rounded-circle" />

                    <img src={require('../img/mugshot/donald-schmidt.png')} alt="Donald Schmidt" className="florida__mugshot--img rounded-circle" />
                </Col>

                <Col className="h-100 col-12 col-md-8 col-lg-4 florida__home--content">
                    &nbsp;
                </Col>
            </Row>
        </Container>
    );
}

export default Home;