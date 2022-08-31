import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function BannerLeft(props) {
    return (
        <Container className='text-center text-lg-end bg-light py-3 mb-3 banner rounded'>
            <Row>
                <Col xs={10} lg={6} className='banner-img-container mx-auto pb-3'>
                    <Image rounded fluid src={props.image} alt='banner-img' className='banner-img-left' />
                </Col>
                <Col lg={5} className='my-auto pe-lg-5 pb-3'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <Button className='fs-5' as={Link} to={props.link} variant='secondary'>{props.buttonText}</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BannerLeft;