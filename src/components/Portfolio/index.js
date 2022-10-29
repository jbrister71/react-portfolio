import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            name: 'The Game Room',
            githubLink: 'https://github.com/Tiraso12/The-Game-Room',
            appLink: 'https://fathomless-anchorage-22375.herokuapp.com/',
            imgLink: 'the-game-room.png'
        }
    ]

    return (
        <div>
            <h2 className='mt-4 section-name'>Portfolio</h2>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Project project={projects[0]}></Project>
                    </Col>
                    <Col>
                        <Project project={projects[0]}></Project>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <Project project={projects[0]}></Project>
                    </Col>
                    <Col>
                        <Project project={projects[0]}></Project>
                    </Col>
                </Row>
                <Row className='mt-3 mb-5'>
                    <Col>
                        <Project project={projects[0]}></Project>
                    </Col>
                    <Col>
                        <Project project={projects[0]}></Project>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;