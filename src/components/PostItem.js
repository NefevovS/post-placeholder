import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

const PostItem = ({body,title}) => {
    return (
           <Row>
               <Col>
                   <Card className='p-2'>
                       <p className="fw-bold">{title}</p>
                       {body}
                   </Card>
               </Col>
           </Row>




    );
};

export default PostItem;