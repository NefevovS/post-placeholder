import React from 'react';
import {Card} from "react-bootstrap";

const CommentsItem = ({comments}) => {
       return (
        <Card className="p-2 m-2 " style={{width:"50%"}}>
                <Card.Title>{comments?.email}</Card.Title>
                <Card.Text>{comments?.name}</Card.Text>
        </Card>
    );
};

export default CommentsItem;