import React, {useEffect} from 'react';
import PostList from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {asyncChangePage} from "../store/actionCreators";

const PostsPage = () => {

    const dispatch =useDispatch()
    useEffect(function (){
        dispatch(asyncChangePage({page:1}))})

    return (
        <div>
           <PostList/>
        </div>
    );
};

export default PostsPage;