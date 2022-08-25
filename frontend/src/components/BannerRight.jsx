import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function BannerRight(props) {
    return (
        <Container className='text-center text-lg-start bg-light py-3 banner mb-3 mt-3 rounded'>
            <Row>
                <Col lg={5} className='my-auto ps-lg-5 pb-3'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <Button className='fs-5' as={Link} to={props.link} variant='secondary'>{props.buttonText}</Button>
                </Col>
                <Col xs={10} lg={6} className='banner-img-container mx-auto'>
                    <Image rounded fluid src={props.image} alt='banner-img' className='banner-img-right' />
                </Col>
            </Row>
        </Container>
    );
}

export default BannerRight;