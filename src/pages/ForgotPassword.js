import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    const findEmailSubmitHendle = async (e) => {
        e.preventDefault()

        try {
            console.log({email})
        } catch (err) {
            console.log(err)
        };

    };

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>
                    <h1>비밀번호 찾기</h1>
                    <Form className={"mt-4"} onSubmit={findEmailSubmitHendle}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Text className="text-muted">
                                비밀번호를 잃어버리셨습니까?
                            </Form.Text>
                            <Form.Text className="text-muted mb-3">
                                가입 시 사용하신 이메일을 입력해주세요.
                            </Form.Text>

                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                        </Form.Group>

                        <Button variant="primary" type="submit" className={"mt-3"}>
                            비밀번호 찾기
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;