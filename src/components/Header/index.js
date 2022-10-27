import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from '../Nav';

function Header() {
    return (
        <header className="header mt-3 me-5">
            <Container fluid>
                <Row>
                    <Col lg={2} className="mt-3">
                        <h1>Jacob Brister</h1>
                    </Col>
                    <Col lg={10}>
                        <Nav></Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;