import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Nav(props) {

    const { navCategories, setCurrentCategory } = props;

    return (
        <ul className='nav-list mt-3'>
            <Container>
                <Row>
                    <Col>
                        <li>
                            <span className='nav-item' onClick={() => setCurrentCategory(navCategories[0])}>About Me</span>
                        </li>
                    </Col>
                    <Col>
                        <li>
                            <span className='nav-item' onClick={() => setCurrentCategory(navCategories[1])}>Porfolio</span>
                        </li>
                    </Col>
                    <Col>
                        <li>
                            <span className='nav-item' onClick={() => setCurrentCategory(navCategories[2])}>Contact</span>
                        </li>
                    </Col>
                    <Col>
                        <li>
                            <span className='nav-item' onClick={() => setCurrentCategory(navCategories[3])}>Resume</span>
                        </li>
                    </Col>
                </Row>
            </Container>
        </ul>
    )
}

export default Nav;