import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Nav() {
    return (
        <ul className='nav-list mt-3'>
            <Container>
                <Row>
                    <Col>
                        <li>
                            <a href="/" className='nav-item'>About Me</a>
                        </li>
                    </Col>
                    <Col>
                        <li>
                            <a href='/' className='nav-item'>Porfolio</a>
                        </li>
                    </Col>
                    <Col>
                        <li>
                            <a href='/' className='nav-item'>Contact</a>
                        </li>
                    </Col>
                    <Col>
                        <li>
                            <a href='/' className='nav-item'>Resume</a>
                        </li>
                    </Col>
                </Row>
            </Container>
        </ul>
    )
}

export default Nav;