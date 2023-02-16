import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Service = ({ item }) => {
    return(
    <Col lg={4}>
        <div className='single-service'>
            <img src={item.img} alt='' className="w-100 mb-3"/>
            <h3 className='my-3'>{item.name}</h3>
            <h5>Price: {item.price}</h5>
            <p>{item.description}</p>
            <Button variant="secondary">Book Now</Button>
        </div>
    </Col>
    )
};
export default Service;