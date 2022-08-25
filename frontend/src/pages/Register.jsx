import SignInForm from '../components/SignInForm';

function Register() {
    return (
        <SignInForm title='Register' button='Register' route='/register' isRegister='true' />
    );
}

export default Register;