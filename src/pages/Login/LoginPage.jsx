import { Alert, Button, Col, Input, Row, notification } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PageLogin() {
  const data =
  {
    "username": "admin",
    "password": "admin"
  }


  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const login = () => {
    if (data.username === credentials.username && data.password === credentials.password) {
      notification.success({
        message: "Login Sukses"
      })
      localStorage.setItem("role", "admin")
      navigate("/dashboard")
    } else {
      notification.error({
        message: "Login Gagal",
        description: 'Username atau password yang Anda masukkan salah.',
      })
    }
  };


  return (
    <div>
      <div className=' min-h-screen items-center flex w-screen '>
        <div className=' border border-zinc-300 md:w-4/12 w-80 flex bg-gray-50 h-72 rounded-lg mx-auto'>
          <div className='items-center w-7/12 space-y-3 my-auto mx-auto '>
            <div>
              <p>Username</p>
              <Input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    login()
                  }
                }
                }
                onChange={handleInputChange} name='username' placeholder='Masukkan Username' />
            </div>
            <div>
              <p>Password</p>
              <Input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    login()
                  }
                }
                }
                onChange={handleInputChange} name='password' type='password' placeholder='Masukkan Password' />
            </div>
            <div className=' justify-center md:justify-end flex gap-2  '>
              <button className='bg-blue-500 text-white hover:text-white py-1 px-2 rounded transition ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'>
                Register
              </button>
              <button onClick={login}

                className='bg-blue-500 text-white hover:text-white py-1 px-2 rounded transition ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'>
                Login
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageLogin    