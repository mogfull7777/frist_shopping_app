import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChackBox, setIsChackBox] = useState(false);

    const loginSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            const userInput = {
                email : email,
                password : password,
                isChackBox : isChackBox
            }

            console.log(userInput)

        } catch (err) {
            console.log(err)
        }


    }


    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>

                    <h1>로그인</h1>

                    <Form className={"mt-4"} onSubmit={loginSubmitHendle}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>패스워드</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="아이디 기억하기"
                                value={isChackBox}
                                onChange={e => setIsChackBox(e.target.checked)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            로그인
                        </Button>
                    </Form>
                    <Row className={"py-3 mt-4"}>
                        <Col>
                            <Link to={"/find/email"}>
                                아이디 찾기
                            </Link>
                            <Link className={"ml-4"} to={"/forgot/password"}>
                                비밀번호 찾기
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;