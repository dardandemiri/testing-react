import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand className="height">
          <NavbarToggler className="right" onClick={this.toggle} />
          <NavbarBrand href="/">Dardan <span className="strong">Demiri</span></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/step1/">Step 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/step2/">Step 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/step3/">Step 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/success/">> Success</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container fluid={true} className="bg-photo">
          <Container>
            <Row className="justify-content-center ">
              <h3 className="mt-4">How to become successful</h3>
            </Row>
            <Row className="mt-5 text-center">
              <Col sm="4">
                <h4>Step 1</h4>
                <p>Decide what you want</p>
              </Col>
              <Col sm="4">
                <h4>Step 2</h4>
                <p>Turn the Cave Mode On</p>
              </Col>
              <Col sm="4">
                <h4>Step 3</h4>
                <p>Now Go for it.<br />Learn, Work and Repeat.</p>
              </Col>
            </Row>
          </Container>
        </Container>


      </div >
    );
  }
}

export default App;