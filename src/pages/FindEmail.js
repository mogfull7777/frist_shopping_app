import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const FindEmail = () => {

    const [phoneNumber, setPhoneNumber] = useState(Number);

    const findPhoneNumberSubmitHendle = async (e) => {
        e.preventDefault()

        try {
            console.log({phoneNumber})
        } catch (err) {
            console.log(err)
        };
    };

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>
                    <h1>아이디 찾기</h1>
                    <Form className={"mt-4"} onSubmit={findPhoneNumberSubmitHendle}>

                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">

                            <Form.Text className="text-muted">
                                아이디를 잃어버리셨습니까?
                            </Form.Text>
                            <Form.Text className="text-muted mb-3">
                                가입 시 사용하신 휴대전화번호를 입력해주세요.
                            </Form.Text>

                            <Form.Label>휴대전화번호</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="phone number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className={"mt-3"}>
                            아이디 찾기
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FindEmail;