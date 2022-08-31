import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function LoggedOut() {
    return (
        <Container as='main' className='m-auto bg-light py-5 rounded text-center mx-auto'>
            <h1 className='mb-3'>You are now signed out</h1>
            <p>
                <Link to='/' className='text-muted'
                >Click here to return to the home page
                </Link>
            </p>
        </Container>
    );
}

export default LoggedOut;