import React from 'react'
import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Appheader from '../Appheader'
import HomePage from '../pages/HomePage'

import Chat from '../components/Chat'
import Customer from '../components/Customer'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Register from '../components/Register'
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

export default function index() {
    const user = localStorage.getItem('userid')
    const ProtectedRoute = ({ children }) => {
        console.log(user)
        if (!user) {
            return <Navigate to="/login" replace />
        }

        return children
    }
    return (
        <BrowserRouter>
            <Header />
            <Navbar />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/customer"
                    element={
                        <ProtectedRoute>
                            <Customer />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/chat"
                    element={
                        <ProtectedRoute>
                            <Chat />
                        </ProtectedRoute>
                    }
                />
                <Route path="/" element={<HomePage />} />

                {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
