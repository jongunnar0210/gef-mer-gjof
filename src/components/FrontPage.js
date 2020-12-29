import React from 'react'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import hands from '../images/hendur.png';

export default function FrontPage() {
  return (
    <div>
      <div className='navBarContainer'>
        <Navbar expand='lg' className='navbar-dark'>
          {/* <Nav className='blackDiv'> */}
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='navbarToggler' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>Gerðu gjafalista</Nav.Link>
              <Nav.Link href='#link'>Gjafahugmyndir</Nav.Link>
              <Nav.Link href='#bla'>Innskrá | Nýskrá</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* </Nav> */}
        </Navbar>
      </div>
      <Container fluid>
        <Row>
          <Col><h1>Fáðu gjöfina sem þig langar í</h1></Col>
        </Row>
        <Row>
          <Col><h2>Fullkomin gjöf í hvert skipti</h2></Col>
        </Row>
        <Row>
          <Col lg='11'>
            <img src={hands} alt="hands" className='float-right' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
