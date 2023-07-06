import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register } from "./pages/index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from "./pages/dashboard/index";


const BASE_URL = "https://new-expensetrackerserver.onrender.com/api/";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
