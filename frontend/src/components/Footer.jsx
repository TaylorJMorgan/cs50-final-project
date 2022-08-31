import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className='text-center bg-light py-4 border-top mt-auto'>
            <Container>
                <Nav as='ul' className='justify-content-center'>
                    <Nav.Item as='li'>
                        <Nav.Link as={Link} to='Products' className='text-muted'><p>Shop</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link as={Link} to='login' className='text-muted'>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link as={Link} to='Cart' className='text-muted'>Your Cart</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav as='ul' className='justify-content-center border-bottom pb-3 mb-3'>
                    <Nav.Item as='li'>
                        <Nav.Link href='https://www.facebook.com/taylorjamesmorgan' className='text-muted'><FacebookIcon /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link href='https://github.com/TaylorJMorgan' className='text-muted'><GitHubIcon /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link href='https://www.linkedin.com/in/taylor-morgan-dev/' className='text-muted'><LinkedInIcon /></Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className=''>
                    <p className='text-muted'>
                        All images are AI generated with DALL-E
                    </p>
                    <p className='text-muted'>
                        &copy; Taylor Morgan {currentYear}
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;