import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mugshot from "./Mugshot";
import Phone from "./Phone";
import { Redirect } from "react-router-dom";
import cases from "../cases.json";

function Case(props) {

    // Setting caseFile state based on react router parameter (../case/:id)
    // Matches parameter to the "link" key-value pair in cases.json
    const retrieveCase = useCallback(() => {
        const selectedFile = cases.filter(file => file.link === props.match.params.id);
        if (selectedFile.length) {
            return selectedFile[0];
        } else {

            // If there is no cases that match the react router parameter,
            // create an object that will redirect to the home page when read 
            // in a condition in the JSX
            const falseObj = {
                "link": "false",
            }
            return falseObj;
        }
        
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
            <Phone video={caseFile}></Phone>
            <Container fluid>
                <Row className="h-100 justify-content-center justify-content-md-start justify-content-lg-center">
                    <Col md={8} className="florida__case-file--document">

                        {caseFile.link !== "false" ? <Mugshot image={caseFile}></Mugshot> : <Redirect to="/"></Redirect>}

                        <div className="florida__case-file--document-logo mx-3 mx-md-5">
                            <img src={require('../img/fatt-logo.png')} alt="Florida Anti-Tomfoolery Taskforce" />
                            <h2 className="mt-2">INCIDENT REPORT</h2>
                        </div>

                        <Container fluid className="florida__case-file--document-text-top">
                            <Row className="mx-0 mx-sm-4 py-3 px-4">
                                <Col xs={"12"} sm={"3"} className="text-sm-right px-0 px-sm-3">
                                    Reported By:
                                </Col>
                                <Col className="filled-out  px-0 px-sm-3">
                                    Liam Ipsum
                                </Col>
                                <Col xs={"12"} sm={"3"} className="text-sm-right px-0 px-sm-3 mt-3 mt-sm-0">
                                    Date of Incident:
                                </Col>
                                <Col className="filled-out  px-0 px-sm-3">
                                    6/29/2020
                                </Col>
                            </Row>
                            <Row className="mx-0 mx-sm-4 pb-3 px-4">
                                <Col xs={"12"} sm={"3"} className="text-sm-right px-0 px-sm-3">
                                    Incident Number:
                                </Col>
                                <Col className="filled-out px-0 px-sm-3">
                                    14355{caseFile.id}
                                </Col>
                                <Col xs={"12"} sm={"3"} className="text-sm-right px-0 px-sm-3 mt-3 mt-sm-0">
                                    Name of Perpetrator:
                                </Col>
                                <Col className="filled-out  px-0 px-sm-3">
                                    {caseFile.name}
                                </Col>
                            </Row>
                        </Container>

                        <Container fluid className="mt-3">
                            <Row className="mx-0 mx-sm-3 py-3">
                                <Col>
                                    Incident Description: 
                                </Col>
                            </Row>
                            <Row className="mx-0 mx-sm-4 mb-3 py-3 px-4 florida__case-file--document-text-incident">
                                <Col>
                                    {caseFile.crime}
                                </Col>
                            </Row>
                        </Container>
                        
                        

                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Case;