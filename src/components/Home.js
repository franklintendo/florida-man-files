import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return(

        <div className="florida__home--container">
            <Container className="florida__home--content">
                <Row>
                    <Col className="text-center py-md-5 mb-3">
                    <img src={require('../img/florida.png')} className="florida__home--state--mobile d-block d-md-none mx-auto my-3" alt="Florida" />
                        <h1 className="florida__home--title d-inline px-3 py-2 my-5">the florida man files</h1>
                        <p className="florida__home--instructions mt-3 mb-0 my-md-3">Click on a mugshot<span className="red">*</span> to view the case.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-8">
                        <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img florida__mugshot--berton-strong rounded-circle" />

                        <img src={require('../img/mugshot/ben-jenkins.png')} alt="Ben Jenkins" className="florida__mugshot--img florida__mugshot--ben-jenkins rounded-circle" />

                        <img src={require('../img/mugshot/albert-alvarez.png')} alt="Albert Alvarez" className="florida__mugshot--img florida__mugshot--albert-alvarez rounded-circle" />

                        <img src={require('../img/mugshot/joel-jennings.png')} alt="Joel Jennings" className="florida__mugshot--img florida__mugshot--joel-jennings rounded-circle" />

                        <img src={require('../img/mugshot/carl-skippins.png')} alt="Carl Skippins" className="florida__mugshot--img florida__mugshot--carl-skippins rounded-circle" />

                        <img src={require('../img/mugshot/herman-douglas.png')} alt="Herman Douglas" className="florida__mugshot--img florida__mugshot--herman-douglas rounded-circle" />

                        <img src={require('../img/mugshot/dewey-fleming.png')} alt="Dewey Fleming" className="florida__mugshot--img florida__mugshot--dewey-fleming rounded-circle" />

                        <img src={require('../img/mugshot/donald-schmidt.png')} alt="Donald Schmidt" className="florida__mugshot--img florida__mugshot--donald-schmidt rounded-circle" />

                        <img src={require('../img/florida.png')} className="florida__home--state w-100" alt="Florida" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;