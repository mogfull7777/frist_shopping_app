import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [isCheckBox, setIsCheckBox] = useState(false);


    const signUpSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            if (password !== confirmPassword) {
                alert("password not match")
            } else if (isCheckBox === false) {
                alert("Please check in the box.")
            }


            const userInput = {
                username : username,
                email : email,
                password : password,
                isCheckBox : isCheckBox
            }

            console.log(userInput)

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            <Container className={"mt-5"}>
                <Row className={"justify-content-md-center"}>
                    <Col xs={12} md={6}>
                        <h1>회원가입</h1>
                        <Form className={"mt-4"} onSubmit={signUpSubmitHendle}>

                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>닉네임</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </Form.Group>

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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>패스워드 확인</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={e => setconfirmPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                회원가입
                            </Button>

                            <Form.Text className="text-muted mt-3">
                                가입 시, 통합 계정으로 현 판매처가 제공하는 서비스를 모두 이용하실 수 있습니다.
                            </Form.Text>
                            <Form.Text className="text-muted mt-3 mb-3">
                                통합 계정 및 서비스 이용약관 (This is not showping. SHOPPING.), 개인정보처리방침에 동의합니다.
                            </Form.Text>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="동의"
                                    value={isCheckBox}
                                    onChange={e => setIsCheckBox(e.target.checked)}
                                />
                            </Form.Group>

                        </Form>
                        <Row className={"py-3"}>
                            <Col>
                                아이디를 이미 가지고 계신가요?
                                <Link className={"ml-2"} to={"/login"}>
                                    로그인
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;