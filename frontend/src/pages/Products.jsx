import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/Container';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products').then(response =>
            response.json().then(data => {
                setProducts(data);
            })
        );
    }, []);

    return (
        <Container className='bg-light rounded p-4'>
            <Row>
                {products.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image} />
                    )
                })}
            </Row>
        </Container>
    );
}

export default Products;