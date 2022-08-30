import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function ProductCard(props) {

    const [show, setShow] = useState(false);
    const [error, setError] = useState();
    const [popoverText, setPopoverText] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const popover = (
        <Popover id='popover'>
            <Popover.Header as='h3'>Add to cart</Popover.Header>
            <Popover.Body>{popoverText}</Popover.Body>
        </Popover>
    )

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

                    <OverlayTrigger trigger='click' placement='right' overlay={popover}>
                        <Button className='fs-5' variant='secondary'
                            onClick={async () => {
                                const id = props.id;
                                const name = props.name;
                                const price = props.price;
                                const image = props.image;

                                const product = { id, name, price, image };
                                const response = await fetch('/set-product', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(product)
                                });

                                if (response.ok) {
                                    setPopoverText('Item added to cart');
                                    return 'TODO: when product is successfully added';
                                }

                                if (response.status === 400) {
                                    const errorText = async () => {
                                        const result = await response.text();
                                        setError(result);
                                    }
                                    errorText();
                                    setPopoverText('Something went wrong: ' + error);
                                }
                            }}>Add to cart</Button>
                    </OverlayTrigger>

                </Modal.Footer>
            </Modal>

        </Col>
    );
}

export default ProductCard;