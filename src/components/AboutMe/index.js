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
                            <img className='about-img' src='headshot3.jpg' alt='placeholder-img' height={402} width={302}></img>
                        </Col>
                        <Col xs={12} lg={6}>
                            <p className='about-text ps-5 pe-5'>
                            Full-stack web developer with an interest in software development.
                            Taught software development at Houston Community College and Valencia College.
                            Earned a certificate in full-stack web development at University of Central Florida coding boot camp.
                            Passionate about computer science and always seeking to learn new things.
                            A fast learner, with strengths in problem solving and adapting to new paradigms.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutMe;