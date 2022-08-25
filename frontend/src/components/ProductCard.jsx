import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function ProductCard(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Currency formatting regex from Stack Overflow https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expo
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (

        <Col md={4} key={props.id}>
            <Card className='mb-4' onClick={handleShow}>
                <Card.Img className='mb-3' variant='top' src={require('../images/' + props.image)} alt={props.image} />
                <Card.Title className='fw-bold pb-2 ms-3 me-3 border-bottom'>{props.name}</Card.Title>
                <Card.Text className='mb-3 ms-3'>{currencyFormat(props.price)} CAD</Card.Text>
            </Card>

            <Modal show={show} onHide={handleClose} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image className='mb-3' fluid rounded src={require('../images/' + props.image)} />
                    <p className='fs-5'>{props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <p className='me-auto fs-5'>{currencyFormat(props.price)} CAD</p>
                    <Button className='fs-5' variant='secondary' onClick={handleClose}>Add to cart</Button>
                </Modal.Footer>
            </Modal>

        </Col>
    );
}

export default ProductCard;