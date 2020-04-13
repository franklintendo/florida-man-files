import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return(

        <div className="florida__home--container">
            <Container>
                <Row>
                    <Col className="text-center py-5 mb-3">
                        <h1 className="florida__home--title d-inline px-3 py-2 my-5">the florida man files</h1>
                        <p>Click on a mugshot to view the case.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-8">
                        <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img florida__mugshot--berton-strong rounded-circle" />

                        <img src={require('../img/mugshot/ben-jenkins.png')} alt="Ben Jenkins" className="florida__mugshot--img florida__mugshot--ben-jenkins rounded-circle mx-3 my-3" />

                        <img src={require('../img/mugshot/albert-alvarez.png')} alt="Albert Alvarez" className="florida__mugshot--img florida__mugshot--albert-alvarez rounded-circle mx-3 my-3" />

                        <img src={require('../img/mugshot/joel-jennings.png')} alt="Joel Jennings" className="florida__mugshot--img florida__mugshot--joel-jennings rounded-circle mx-3 my-3" />


                        <img src={require('../img/florida.png')} className="florida__home--state w-100" alt="Florida" />
                    </Col>
                </Row>
            </Container>
        </div>
        // <Container fluid className="h-100 w-100 florida__home--container">
        //     <Row className="h-100 justify-content-center">
        //         <Col className="col-12 h-100">
        //             <Container className="h-100">
        //                 <Row className="h-100 justify-content-center">
        //                     <Col className="col-8 florida__home--content text-center">

        //                         <img src={require('../img/mugshot/joel-jennings.png')} alt="Joel Jennings" className="florida__mugshot--img rounded-circle mx-3 my-3" />
        //                             <br/>
        //                         <img src={require('../img/mugshot/carl-skippins.png')} alt="Carl Skippins" className="florida__mugshot--img rounded-circle mx-3 my-3" />

        //                         <img src={require('../img/mugshot/herman-douglas.png')} alt="Herman Douglas" className="florida__mugshot--img rounded-circle mx-3 my-3" />

        //                         <img src={require('../img/mugshot/dewey-fleming.png')} alt="Dewey Fleming" className="florida__mugshot--img rounded-circle mx-3 my-3" />

        //                         <img src={require('../img/mugshot/donald-schmidt.png')} alt="Donald Schmidt" className="florida__mugshot--img rounded-circle mx-3 my-3" />
        //                     </Col>
        //                 </Row>
        //             </Container>
        //         </Col>
        //         {/* <Col className="col-12 col-md-8 col-lg-4 florida__mugshot--container">
        //             <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img rounded-circle my-auto d-block" />

        //             <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img rounded-circle my-auto mx-auto d-block" />
        //         </Col> */}
        //         {/* <Col className="col-auto my-auto mx-auto florida__mugshot--container">
        //             <img src={require('../img/mugshot/berton-strong.png')} alt="Berton Strong" className="florida__mugshot--img rounded-circle" />
                    
        //             <img src={require('../img/mugshot/ben-jenkins.png')} alt="Ben Jenkins" className="florida__mugshot--img rounded-circle" />

        //             <img src={require('../img/mugshot/albert-alvarez.png')} alt="Albert Alvarez" className="florida__mugshot--img rounded-circle" />

        //             <img src={require('../img/mugshot/joel-jennings.png')} alt="Joel Jennings" className="florida__mugshot--img rounded-circle" />

        //             <img src={require('../img/mugshot/carl-skippins.png')} alt="Carl Skippins" className="florida__mugshot--img rounded-circle" />

        //             <img src={require('../img/mugshot/herman-douglas.png')} alt="Herman Douglas" className="florida__mugshot--img rounded-circle" />

        //             <img src={require('../img/mugshot/dewey-fleming.png')} alt="Dewey Fleming" className="florida__mugshot--img rounded-circle" />

        //             <img src={require('../img/mugshot/donald-schmidt.png')} alt="Donald Schmidt" className="florida__mugshot--img rounded-circle" />
        //         </Col> */}

        //         {/* <Col className="h-100 col-12 col-md-8 col-lg-4 florida__home--content">
        //             &nbsp;
        //         </Col> */}
        //     </Row>
        // </Container>
    );
}

export default Home;