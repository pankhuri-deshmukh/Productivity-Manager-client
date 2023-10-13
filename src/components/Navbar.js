import {Link} from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { RiHome2Line} from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import UserSide from './UserSide';
import { ContextUser } from '../context/UserContext';

function Navbar() {

  const [viewUser, setViewUser] = useState(false);
  

  const handleClick = () => {

  }
  const handleClickUser = () => {

  }
  return (
    <div className='h-16 w-full bg-black'>
    
    <div className="fixed h-16 w-full bg-black p-4 flex justify-between items-center ">
      <Link to="/" className="text-white text-2xl font-bold">
        The Store.
      </Link>

      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white">
          <RiHome2Line size={20} />
        </Link>

        <div onClick={handleClick} className="text-white cursor-pointer">
          <FaShoppingCart size={20} />
        </div>

        <div onClick={handleClickUser} className="text-white cursor-pointer">
          <FaUser size={20} />
        </div>

      </div>
    </div>
      <div className={`bg-gray-100 w-[30%] h-full fixed top-16 right-0 transform transition-transform duration-500 shadow-xl ${viewUser ? 'translate-x-0' : 'translate-x-full'}`}>
        <div onClick={handleClickUser} className="flex ">
          <AiOutlineClose size={25} className="mr-2 text-black font-bold" />
        </div>
        <ContextUser.Provider value={{ viewUser, setViewUser }}>
        <UserSide />
        </ContextUser.Provider>
      </div>
    </div>
  );
};

export default Navbar;