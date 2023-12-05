import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.js"
import AddBook from "./pages/AddBook.js"
import Edit from "./pages/Edit.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/create" element={<AddBook/>}/>
        <Route path="/update/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
