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
            appLink: 'https://pure-refuge-94024.herokuapp.com/',
            imgLink: 'the-game-room.png'
        },
        {
            name: 'Your Next Game',
            githubLink: 'https://github.com/samkarp700/your-next-game',
            appLink: 'https://samkarp700.github.io/your-next-game/',
            imgLink: 'your-next-game.png',
        },
        {
            name: 'Weather Dashboard',
            githubLink: 'https://github.com/jbrister71/weather-dashboard',
            appLink: 'https://jbrister71.github.io/weather-dashboard/',
            imgLink: 'weather-dashboard.png'
        },
        {
            name: 'Coding Quiz',
            githubLink: 'https://github.com/jbrister71/coding-quiz',
            appLink: 'https://jbrister71.github.io/coding-quiz/',
            imgLink: 'coding-quiz.png'
        },
        {
            name: 'Workday Scheduler',
            githubLink: 'https://github.com/jbrister71/workday-scheduler',
            appLink: 'https://jbrister71.github.io/workday-scheduler/',
            imgLink: 'workday-scheduler.png'
        },
        {
            name: 'Note Taker',
            githubLink: 'https://github.com/jbrister71/note-taker',
            appLink: 'https://guarded-wave-81044.herokuapp.com/',
            imgLink: 'note-taker.png'
        }
    ]

    return (
        <div>
            <h2 className='mt-4 section-name'>Portfolio</h2>
            <Container className='mt-5'>
                <Row>
                    <Col xs={12} lg={6}>
                        <Project project={projects[0]}></Project>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Project project={projects[1]}></Project>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={12} lg={6}>
                        <Project project={projects[2]}></Project>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Project project={projects[3]}></Project>
                    </Col>
                </Row>
                <Row className='mt-3 mb-5 pb-5'>
                    <Col xs={12} lg={6}>
                        <Project project={projects[4]}></Project>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Project project={projects[5]}></Project>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;