import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function CartItem(props) {

    const [error, setError] = useState();
    const [isDeleted, setDeleted] = useState(false);

    // Currency formatting regex from Stack Overflow https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expo
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div>
            {!isDeleted &&
                <Row key={props.id} className='border-top align-items-center py-3 mx-3'>
                    <Col md={3}>
                        <Image thumbnail className='cart-img' src={require('../images/' + props.image)} alt={props.image} />
                    </Col>
                    <Col md={3}>
                        <h4>{props.name}</h4>
                    </Col>
                    <Col md={3}>
                        <h4>{currencyFormat(props.price)} CAD</h4>
                    </Col>
                    <Col md={3}>
                        <Button variant='secondary'
                            onClick={async () => {
                                const id = props.id;
                                const product = { id };
                                const response = await fetch('/remove-product', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(product)
                                });

                                if (response.ok) {
                                    setDeleted(true);
                                    props.stateChanger(props.id);
                                    return 'TODO';
                                }

                                if (response.status === 400) {
                                    const errorText = async () => {
                                        const result = await response.text();
                                        setError(result);
                                        console.log(error);
                                    }
                                    errorText();
                                }
                            }}>Remove from cart</Button>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default CartItem;