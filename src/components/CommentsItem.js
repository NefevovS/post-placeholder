import React from 'react';

const CommentsItem = ({comments}) => {
console.log(comments)
       return (
        <div>
                <p>{comments?.email}</p>
                <p>{comments?.name}</p>
        </div>
    );
};

export default CommentsItem;