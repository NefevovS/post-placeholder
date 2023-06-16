import React, {useEffect} from 'react';
import PostList from "../components/PostList";
import {useDispatch} from "react-redux";
import {asyncFetchPosts} from "../store/actionCreators";

const PostsPage = () => {
    const dispatch =useDispatch()
    useEffect(function (){
        dispatch(asyncFetchPosts())},[])

    return (
        <div>
           <PostList/>
        </div>
    );
};

export default PostsPage;