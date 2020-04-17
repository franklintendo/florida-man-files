import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {

    function pushToCase(file) {
        console.log(file);
        
    }

    // Cases.json is fed into this function to create images based on each entry within the JSX
    function renderCases(cases) {
        return cases.map(entry => {
            return <img key={entry.id} onClick={() => pushToCase(entry)} name={entry.link} src={require(`../img/mugshot/${entry.link}.png`)} alt={entry.name} className={`florida__mugshot--img florida__mugshot--${entry.link} rounded-circle`} /> 
        });
    }


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
                    <Col className="col-12 col-md-8 text-center">

                        
                        { renderCases(require('../cases.json')) }

                        <img src={require('../img/florida.png')} className="florida__home--state w-100" alt="Florida" />
                    </Col>
                    
                </Row>
            </Container>
            <div className="florida__home--attr text-right mr-3 mb-3">
                <span className="red red--bold">*</span>Photos by <a href="https://generated.photos" target="_blank" rel="noopener noreferrer">Generated Photos</a>
            </div>
        </div>
    );
}

export default Home;