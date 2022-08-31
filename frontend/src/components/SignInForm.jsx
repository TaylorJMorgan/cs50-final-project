import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignInForm(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigate = useNavigate();

    return (
        <Container

            as='main'
            className='m-auto bg-light py-3 rounded'>
            <Form
                className='text-center form-signin mx-auto' noValidate>
                <h1 className='mb-3'>{props.title}</h1>

                <p className='text-danger'>{error}</p>

                <FloatingLabel
                    controlId='floatingInput'
                    label='Email Address'>
                    <Form.Control
                        required
                        type='email'
                        placeholder='name@example.com'
                        className='mb-3'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </FloatingLabel>

                <FloatingLabel
                    controlId='floatingPassword'
                    label='Password'>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Password'
                        className='mb-3'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </FloatingLabel>

                {props.isRegister === 'true' &&
                    <FloatingLabel
                        controlId='floatingPassword'
                        label='Confirm Password'>
                        <Form.Control
                            required
                            type='password'
                            placeholder='Confirm Password'
                            className='mb-3'
                            value={passwordConfirm}
                            onChange={e => setPasswordConfirm(e.target.value)} />
                    </FloatingLabel>
                }

                <Button
                    variant='secondary'
                    className='w-100 mb-3'
                    size='lg'
                    onClick={async () => {
                        const user = { email, password, passwordConfirm };
                        const response = await fetch(props.route, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        });

                        if (response.ok) {
                            return navigate('/loggedin', { state: { loggedIn: true } });
                        }

                        if (response.status === 400) {
                            const errorText = async () => {
                                const result = await response.text();
                                setError(result);
                            }
                            errorText();
                        }
                    }}
                >{props.button}
                </Button>

                {props.isRegister === 'false' &&
                    <Link
                        to='/register'
                        className='text-muted'
                    >Create new account
                    </Link>
                }

            </Form>

        </Container>
    );
}

export default SignInForm;