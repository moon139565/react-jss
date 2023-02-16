import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./Services.css";
import Service from '../Service/Service';
import { useEffect, useState } from 'react';
const Services = () => {

    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then((res) => res.json())
        .then((data) => setService(data));
    }, []);

    return(
        <section className="service-section">
            <Container>
                <h3 className='text-center'>My Services</h3>
                <Row>
                    {services.map((item) =>
                    <Service key={item.id} item={item}></Service>)}
                </Row>
            </Container>
        </section>
    )
};
export default Services;