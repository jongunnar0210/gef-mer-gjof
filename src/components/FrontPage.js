import React from 'react'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import hands from '../images/hendur.png';
import logo from '../images/Logo.png';

export default function FrontPage() {
  return (
    <div>
      <Navbar expand='lg' className='navbar-dark'>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='navbarToggler' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto navbarItems'>
            <Nav.Link href='#home'>Gerðu gjafalista</Nav.Link>
            <Nav.Link href='#link'>Gjafahugmyndir</Nav.Link>
            <Nav.Link href='#bla'>Innskrá | Nýskrá</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <Row>
          <Col><h1>Fáðu gjöfina sem þig langar í</h1></Col>
        </Row>
        <Row>
          <Col><h2>Fullkomin gjöf í hvert skipti</h2></Col>
        </Row>
        <Row>
          <Col lg='11'>
            <img src={hands} alt="hands" className='float-right handsImg' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
