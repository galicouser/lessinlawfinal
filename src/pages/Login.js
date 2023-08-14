

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Register from '../components/Register'
import { ToastContainer } from 'react-toastify'
import Appheader from '../Appheader'
import Customer from '../components/Customer'
import Chat from '../components/Chat'

function Login2() {
    return (
        <div className="App">
            <ToastContainer
                theme="colored"
                position="top-center"
            ></ToastContainer>
            <Appheader />
        </div>
    )
}

export default Login2
