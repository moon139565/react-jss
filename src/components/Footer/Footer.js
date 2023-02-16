import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from "../../images/footer.png"
import "./Footer.css";
const Footer = () => {
    return (
        <section className='footer-area'>
            <Container>
            <Row>
                <div>
                    <img src={logo} alt=''/>
                <p>© 2022 Spotographer, All Rights Reserved.</p>
                </div>
            </Row>
            </Container>
        </section>
    );
};
export default Footer;