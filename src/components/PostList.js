import React from 'react';
import PostItem from "./PostItem";
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";

const PostList = () => {
    const posts=useSelector(state => state.posts)
    console.log(posts)
    return (
       <Container className='d-flex flex-column gap-2'>
           {posts.map((post)=>
               <PostItem title={post.title} body={post.body} key={post.id}/>
           )
           }
       </Container>
    );
};

export default PostList;