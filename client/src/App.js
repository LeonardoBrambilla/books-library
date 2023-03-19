import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css';
// https://www.youtube.com/channel/UCwAa6VoM1GCg7n4s3u9FTAg/videos
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Sbooks from "./components/Books/Sbooks";
import Author from "./components/Author/Author";
import SAuthor from "./components/Author/SAuthor";
import Genres from "./components/Genres/Genres";
import SGenres from "./components/Genres/SGenres";
import PostAuthor from "./components/Author/PostAuthor";
import PostBook from "./components/Books/PostBook";
import UpdateBook from "./components/Books/UpdateBooks";
import UpdateAuthor from "./components/Author/UpdateAuthor";


function App() {  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/> 
        <Route path="/books" element={<Books/>}/> 
        <Route path="/books/:book" element={<Sbooks/>}/> 
        <Route path="/authors" element={<Author/>}/>
        <Route path="/authors/:firstName" element={<SAuthor/>}/> 
        <Route path="/genres" element={<Genres/>}/>
        <Route path="/genres/:genres" element={<SGenres/>}/>
        <Route path="/create/author" element={<PostAuthor/>}/>
        <Route path="/create/book" element={<PostBook/>}/>
        <Route path="/putAuthor/:firstName" element={<UpdateAuthor/>}/>
        <Route path="/putBook/:name" element={<UpdateBook/>}/>
      </Route>     
    </Routes>
  </BrowserRouter>
  );
}


export default App;
