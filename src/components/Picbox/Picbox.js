// import "./Picbox.css";
// import Col from 'react-bootstrap/Col';
// const Picbox = ({ item }) => {
//     return(
//     <Col lg={3}>
//         <div className='single-img-div'>
//             <img src={item.img} alt='' className="w-100"/>
//         </div>
//     </Col>
//     )
// };
// export default Picbox;


import React from 'react';
import "./Picbox.css";
import Col from 'react-bootstrap/Col';

const Picbox = ({item}) => {
    return (
        <Col lg={3}>
        <div className='single-img-div'>    
              <img src={item.img} alt='' className="w-100"/>
        </div>
    </Col>
    );
};

export default Picbox;