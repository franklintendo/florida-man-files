import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cases from "../cases.json";
import { Redirect } from "react-router-dom";

function Case(props) {

    // Setting case file hook based on react router parameter (../case/:id)
    // Matches parameter to the "link" key-value pair in cases.json
    const [caseFile, setCaseFile] = useState(() => {
        const selectedFile = cases.filter(file => file.link === props.match.params.id);

        return selectedFile[0];
    });

    return(
        <div className="florida__home--container">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="florida__case-file--photo">
                            <img className="florida__case-file--photo-container" src={require('../img/photo-container.png')} alt="Polaroid" />

                            {caseFile ? <img name={caseFile.link} src={require(`../img/mugshot/${caseFile.link}.png`)} alt={caseFile.name} className={`florida__case-file--photo-mugshot`} /> : <Redirect to="/"></Redirect>}

                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Case;