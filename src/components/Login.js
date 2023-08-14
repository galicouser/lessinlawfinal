import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [username, usernameupdate] = useState('')
    const [password, passwordupdate] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault()
        if (validate()) {
            let inputobj = {
                type: 'login',
                type_id: '1',
                user_id: username,
                pwd: password,
            }
            fetch('https://projects.penntelco.com/lessin/auth', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputobj),
            })
                .then((res) => {
                    return res.json()
                })
                .then((resp) => {
                    console.log(resp)
                    if (resp.result == 'error') {
                        toast.error(resp.message)
                    } else if (resp.result == 'success') {
                        toast.success(resp.message)
                        console.log(resp)
                        sessionStorage.setItem('username', username)
                        localStorage.setItem('userid', resp.data.id)
                        window.location.assign('/dashboard')
                    }
                })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message)
                })
        }
    }
    const validate = () => {
        let result = true
        if (username === '' || username === null) {
            result = false
            toast.warning('Please Enter Username')
        }
        if (password === '' || password === null) {
            result = false
            toast.warning('Please Enter Password')
        }
        return result
    }
    return (
        <div className="row">
            <div
                className="offset-lg-4 col-lg-4"
                style={{ marginTop: '100px' }}
            >
                <form onSubmit={ProceedLoginusingAPI} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>
                                    User Name <span className="errmsg">*</span>
                                </label>
                                <input
                                    value={username}
                                    onChange={(e) =>
                                        usernameupdate(e.target.value)
                                    }
                                    className="form-control"
                                ></input>
                            </div>
                            <div className="form-group">
                                <label>
                                    Password <span className="errmsg">*</span>
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        passwordupdate(e.target.value)
                                    }
                                    className="form-control"
                                ></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                            {/* <Link className="btn btn-success" to={'/register'}>New User</Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
