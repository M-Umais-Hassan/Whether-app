import React from 'react';

import Navbar from '../nav';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from "./ActionProvider";
import MessageParser from './MessageParser';
import config from './Config';

import { Container, Row, Col } from 'react-bootstrap';

function AskBot() {
    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}><Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} /></Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default AskBot;
