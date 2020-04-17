import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cases from "../cases.json";

function Case(props) {
    // const [caseFile, setCaseFile] = useState({});

    const [caseFile, setCaseFile] = useState(() => {
        const selectedFile = cases.filter(file => file.link === props.match.params.id);

        return selectedFile[0];
    });

    return(
        <Container fluid>
            <Row>
                <Col>
                 

                {caseFile ? <img name={caseFile.link} src={require(`../img/mugshot/${caseFile.link}.png`)} alt={caseFile.name} className={`florida__mugshot--img rounded-circle`} /> : "loading"}
                </Col>
            </Row>
        </Container>
    )
}

export default Case;