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
        <Container fluid>
            <Row>
                <Col>
                 
                {caseFile ? <img name={caseFile.link} src={require(`../img/mugshot/${caseFile.link}.png`)} alt={caseFile.name} className={`florida__mugshot--img rounded-circle`} /> : <Redirect to="/"></Redirect>}
                </Col>
            </Row>
        </Container>
    )
}

export default Case;