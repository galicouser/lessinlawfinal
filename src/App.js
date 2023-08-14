import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify'
import Appheader from './Appheader'
import Customer from './components/Customer'
import Chat from './components/Chat'

function App() {
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

export default App
