import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Saved_inner_box() {
    return (
        <div className="saved-box">
            <Row>
                <Col md={6}>
                    <Col md={12}><h1>100 C</h1></Col>
                    <Col md={12}><h2>Sunny</h2></Col>
                </Col>
                <Col md={6}>
                    Icon
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4>Sundar Road</h4>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h5>Raiwind, Pakistan</h5>
                </Col>
            </Row>
            <Row>
                <button>Show More</button>
                <button>Delete</button>
            </Row>
        </div>
    )
}