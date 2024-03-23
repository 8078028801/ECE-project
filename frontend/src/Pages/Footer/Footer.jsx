import React from 'react'
import {Container,Row,Col,Stack,Image,Nav,NavLink} from "react-bootstrap"
export default function Footer() {
  return (
    <>
    <footer>
            <Container fluid>
                <Row className="text-white p-4"style={{backgroundColor:"gray"}}>
                    <Col className="mx-5">
                        <Stack>
                            <Image
                            src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/grwpc.png"
                            alt="college logo"
                            rounded
                            width={250}
                            height={250}
                            />
                            <h4>GOVT:RESIDENTIAL WOMEN'S POLYTECHNIC COLLEGE</h4>
                        </Stack>
                    </Col>
                    <Col className="flex-column fs-5">
                         <h3 className="text-white">ECE Department Students</h3>
                         <p className="text-white">SANDRA T</p>
                         <p className="text-white">ADITHYA M V</p>
                         <p className="text-white">NANDANA K</p>
                         <p className="text-white">NANDANA P</p>
                         <p className="text-white">NOHA C</p>
                         </Col>
                         <Col>
                         <h4>Contact us</h4>
                          <p>hari.peringot@gmail.com</p>
                          <p>Phone: 9497006167</p>
                            
                    </Col>
                </Row>
            </Container>
        </footer>
    
    </>
  )
}
