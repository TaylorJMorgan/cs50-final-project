import SignInForm from '../components/SignInForm';

function Login() {

    return (
        <SignInForm title='Sign in' button='Sign in' isRegister='false' route='/login' />
    );
}

export default Login;