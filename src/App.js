import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div>
      {/* <h1>love you pankhuri deshmukh gupta</h1> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
