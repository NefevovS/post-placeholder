import './App.css';
import Navigation from "./components/Navigation";
import PostsPage from "./pages/PostsPage";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import {useEffect} from "react";
import {PostService} from "./API/PostService";


function App() {
    useEffect(()=>PostService.getPosts(),[])
  return (
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path="/" element={<PostsPage/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
