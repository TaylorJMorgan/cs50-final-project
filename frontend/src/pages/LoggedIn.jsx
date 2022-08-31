import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function LoggedIn() {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(true);
    }, [])

    return (
        <Container as='main' className='m-auto bg-light py-5 rounded text-center mx-auto'>
            {loggedIn === true &&
                <div>
                    <h1 className='mb-3'>You are now signed in</h1>
                    <p>
                        <Link to='/products' className='text-muted'
                        >Click here to start shopping
                        </Link>
                    </p>
                </div>
            }
        </Container>
    );
}

export default LoggedIn;