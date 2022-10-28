import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <div className='footer fixed-bottom'>
            <Container>
                <Row>
                    <Col>
                        <i className='icon bi bi-github' alt='github'></i>
                    </Col>
                    <Col>
                        <i className='icon bi bi-linkedin' alt='linkedin' height={50}></i>
                    </Col>
                    <Col>
                        <i className='icon bi bi-stack' height={50}></i>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;