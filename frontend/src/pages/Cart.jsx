import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Cart() {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState();
    const [state, setState] = useState('');

    useEffect(() => {
        async function getProducts(url = '/get-products') {
            const response = await fetch(url).then(response => response.json().then(data => {
                setCart(data);
                return data;
            }));
            return response;
        }

        async function setProducts() {
            const products = await getProducts();
            setCart(products);
            return products;
        }

        async function handleTotal() {
            const total = await setProducts();
            if (total.status !== 'cart empty') {
                setTotal('$' + (total.map(product => product.price).reduce((product, price) => product + price)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            }
        }

        handleTotal();

    }, [state]);

    return (
        <div>
            <Container className='text-center bg-light py-3 mb-3 rounded'>

                {cart.status === 'cart empty' &&
                    <div>
                        <h1 className='my-3'>Your cart is currently empty</h1>
                        <p>
                            <Link to='/products' className='text-muted'
                            >Click here to start shopping
                            </Link>
                        </p>
                    </div>
                }

                {cart.status !== 'cart empty' &&
                    <div>
                        <h1 className='my-3'>Your cart</h1>
                        {cart.map(product => {
                            return (
                                <CartItem
                                    key={Math.random()}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    stateChanger={setState}
                                />
                            )
                        })}

                        <Row className='border-top align-items-center py-3 mx-3 mb-2'>
                            <Col xs={12} md={6} className='mx-auto text-md-end my-3'>
                                <h3>Your total:</h3>
                            </Col>
                            <Col xs={12} md={6} className='mx-auto text-md-start'>
                                <h3>{total} CAD</h3>
                            </Col>
                        </Row>

                    </div>
                }

            </Container>
        </div>
    );
}

export default Cart;