import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
    return (
        <div>
            <h2 className='mt-4 section-name'>About Me</h2>
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <img className='about-img' src='placeholder-image.png' alt='placeholder-img' height={360} width={640}></img>
                        </Col>
                        <Col xs={12} lg={6}>
                            <p className='about-text ps-5 pe-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutMe;