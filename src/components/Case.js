import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mugshot from "./Mugshot";
import { Redirect } from "react-router-dom";
import cases from "../cases.json";

function Case(props) {

    // Setting caseFile state based on react router parameter (../case/:id)
    // Matches parameter to the "link" key-value pair in cases.json
    const retrieveCase = useCallback(() => {
        const selectedFile = cases.filter(file => file.link === props.match.params.id);
        return selectedFile[0];
    }, [props.match.params.id]);

    const [caseFile, setCaseFile] = useState(retrieveCase());

    // If the react router parameter (../case/:id) changes then update the case file state to match it
    // by rerunning the retrieveCase function
    useEffect(() => {
        if (props.match.params.id !== caseFile.link) {
            setCaseFile(retrieveCase());
        }
      }, [props.match.params.id, caseFile.link, retrieveCase]);

    return(
        <div className="florida__home--container d-flex">
            <Container fluid>
                <Row className="h-100">
                    <Col md={8} className="florida__case-file--document">
                        

                        
                            {caseFile ? <Mugshot image={caseFile}></Mugshot> : <Redirect to="/"></Redirect>}

                            <div className="florida__case-file--document-logo">
                                <img src={require('../img/fatt-logo.png')} alt="Florida Anti-Tomfoolery Taskforce" />
                            </div>
                        

                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Case;