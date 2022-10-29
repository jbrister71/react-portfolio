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
                        <a href='https://github.com/jbrister71'><i className='icon footer-icon bi bi-github' alt='github'></i></a>
                    </Col>
                    <Col>
                        <a href='https://www.linkedin.com/in/jacob-brister-337761240/'><i className='icon footer-icon bi bi-linkedin' alt='linkedin' height={50}></i></a>
                    </Col>
                    <Col>
                        <a href='https://stackoverflow.com/users/19236604/audio'><i className='icon footer-icon bi bi-stack' height={50}></i></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;