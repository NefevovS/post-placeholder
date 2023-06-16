import './App.css';
import Navigation from "./components/Navigation";
import PostsPage from "./pages/PostsPage";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {asyncFetchPosts} from "./store/actionCreators";


function App() {
    const dispatch =useDispatch()
    useEffect(function (){
        dispatch(asyncFetchPosts())},[])
  return (
    <div className="App">
        <Navigation />

        <Routes>
            <Route path="/" element={<PostsPage/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
