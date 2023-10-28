import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextUser } from '../context/UserContext';

const UserSide = () => {
  const navigate = useNavigate();
  const { viewUser, setViewUser } = useContext(ContextUser);

  const user = null; 

  const handleLogout = async () => {
    //for logout

    setViewUser(!viewUser);
    navigate('/');
  };

  const isAdmin = false; //check if user is the administrator

  if (!user) {
    // If user is not logged in, show login button
    return (
      <div className="h-screen flex justify-center items-center">
        <button
          className="bg-black text-white py-2 px-4 rounded-md"
          onClick={() => {
            setViewUser(!viewUser);
            navigate('/login');
          }}
        >
          Login
        </button>
      </div>
    );
  }

  // If user is logged in, show the menu
  return (
    <div>
      <ul className='pl-2 pr-2'>
        <div onClick={() => {
          setViewUser(!viewUser);
        }}>
          <Link to='/'>
            <li className='border-b border-gray-300 py-2'>Home</li>
          </Link>
        </div>
        <div onClick={() => {
          setViewUser(!viewUser);
        }}>
          {!isAdmin && (
            <Link to="/myorders" >
              <li className='border-b border-gray-300 py-2'>My Orders</li>
            </Link>
          )}
        </div>
        <div onClick={() => {
          setViewUser(!viewUser);
        }}>
          {isAdmin && (
            <Link to="/products/add" >
              <li className='border-b border-gray-300 py-2'>Add Product</li>
            </Link>
          )}
        </div>
        <li className='cursor-pointer border-b border-gray-300 py-2' onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
}

export default UserSide;