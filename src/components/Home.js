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
                    <br/>
                    <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img rounded-circle" />
                </Col>

                <Col className="h-100 col-12 col-md-8 col-lg-4 florida__home--content">
                    &nbsp;
                </Col>
            </Row>
        </Container>
    );
}

export default Home;