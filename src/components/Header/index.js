import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from '../Nav';

function Header(props) {

    const { navCategories, currentCategory, setCurrentCategory } = props;

    return (
        <header className="header mt-3 me-5">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className="mt-3">
                        <h1>Jacob Brister</h1>
                    </Col>
                    <Col xs={12} lg={10}>
                        <Nav navCategories={navCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;