import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className = {"text-center py-3"}>
                    Copyright &copy; Junyoung An
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;