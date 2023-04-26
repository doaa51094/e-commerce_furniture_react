import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { room__img } from '../../Data';

const Room = () => {
 
  return (
    <> 
  
    <Row className='room__content py-5 px-5'>
    <Col lg={4} className='br'><h4 className='ps-5'>Edits</h4>
   <div className='px-5 py-2 '>
   <p>Meet the room edits:
            reel life shots of our furniture in action.(we like to think we style our furniture well ,but we can't help but we show off how you do it.)
          </p>
          <h4 className='hh'>Room</h4>
   </div>
    </Col>
        <Col lg={8}>
           <Row >
           {room__img.map((item,i)=>  <Col lg={4} key={i}>
           <div><img src={item.img} className='room__img p-2 shadow' alt="" /></div>
              </Col> )}  
           </Row>
        </Col>
 
    </Row>
    
    </>
  )
}

export default Room