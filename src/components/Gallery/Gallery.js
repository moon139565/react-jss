import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import gallery1 from "../../images/gallery1.jpg";
import gallery2 from "../../images/gallery2.jpg";
import gallery3 from "../../images/gallery3.jpg";
import gallery4 from "../../images/gallery4.jpg";
import gallery5 from "../../images/gallery5.jpg";
import gallery6 from "../../images/gallery6.jpg";
import gallery7 from "../../images/gallery7.jpg";
import gallery8 from "../../images/gallery8.jpg";
import Picbox from "../Picbox/Picbox";
import "./Gallery.css";
const Gallery = () => {
  const [images, setimages] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then(rec => rec.json())
      .then(data => setimages(data));
  }, []);
 
  return (
    <section className="gallery-area">
      <Container>
        <h3 className="text-center">Some Moments</h3>
        <Row>
          {images.map((item) => (
            <Picbox item={item}></Picbox>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Gallery;
