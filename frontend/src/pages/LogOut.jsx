import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LogOut() {

    const navigate = useNavigate();

    return (
        <Container as='main' className='m-auto bg-light py-5 rounded text-center mx-auto'>
            <h1 className='mb-3'>Sign out?</h1>

            <Button
                variant='secondary'
                className='mb-3'
                size='lg'
                onClick={async () => {
                    const response = await fetch('/logout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.ok) {
                        return navigate('/loggedout');
                    }
                }}
            >Click here to sign out
            </Button>




            <p>
                <Link to='/products' className='text-muted'
                >Click here to continue shopping
                </Link>
            </p>
        </Container>
    );
}

export default LogOut;