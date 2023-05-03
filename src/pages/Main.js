import React from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";

const Main = () => {

    const carouselItem = [
        {
            "id" : "1",
            "title" : "d-block w-100",
            "desc" : "First slide",
            "img" : "https://thumbs.dreamstime.com/b/dos-grandes-maletas-amarillas-de-pl%C3%A1stico-o-una-bolsa-viaje-con-fondo-amarillo-concepto-estilo-m%C3%ADnimo-giro-perspectiva-170284256.jpg",
            "label" : "First slide show"
        },
        {
            "id" : "2",
            "title" : "d-block w-100",
            "desc" : "Second slide",
            "img" : "https://thumbs.dreamstime.com/b/tres-maletas-sobre-fondo-amarillo-bolsa-de-viaje-pl%C3%A1stico-rojo-maleta-amarilla-y-azul-estilo-m%C3%ADnimo-representaci%C3%B3n-d-170284622.jpg",
            "label" : "Second slide show"
        },
        {
            "id" : "3",
            "title" : "d-block w-100",
            "desc" : "Third slide",
            "img" : "https://thumbs.dreamstime.com/b/maleta-amarilla-y-roja-sobre-fondo-blanco-concepto-de-viaje-estilo-m%C3%ADnimo-%C2%AA-representaci%C3%B3n-172209213.jpg",
            "label" : "Third slide show"
        }
    ]

    const cardList = [
        {
            "id" : "1",
            "title" : "MacBook #1",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        },{
            "id" : "2",
            "title" : "MacBook #2",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        },{
            "id" : "3",
            "title" : "MacBook #3",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        },{
            "id" : "4",
            "title" : "MacBook #4",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        },{
            "id" : "5",
            "title" : "MacBook #5",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        },{
            "id" : "6",
            "title" : "MacBook #6",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        },{
            "id" : "7",
            "title" : "MacBook #7",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        },{
            "id" : "8",
            "title" : "MacBook #8",
            "text" : "Learn how macOS features and apps can help you streamline your routine and use your Mac seamlessly with all your Apple devices.",
            "img" : "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1"
        }
    ]

    return (
        <>
            {/*  benner img  */}

            <Carousel fade>
                {carouselItem && carouselItem.map(item => (
                    <Carousel.Item>
                        <img
                            className={item.title}
                            src={item.img}
                            alt={item.desc}
                            style={{height : "500px"}}
                        />
                        <Carousel.Caption>
                            <h3>{item.label}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/*  product list  */}

            <Container>
                <Row>
                    {cardList && cardList.map(macbooklist => (
                        <Col className={"mt-5"}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={macbooklist.img} />
                                <Card.Body>
                                    <Card.Title>{macbooklist.title}</Card.Title>
                                    <Card.Text>
                                        {macbooklist.text}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
};

export default Main;