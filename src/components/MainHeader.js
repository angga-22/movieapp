import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'antd';
import { AudioOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "../store/actions/authentication";
import '../assets/styles/header/mainheader.scss';

export default (props) => {
    const { Search } = Input;
    // const { isShowing, toggle } = useModal();
    // const [login, setLogin] = useState(false);
    // const dispatch = useDispatch()
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const isAuthenticate = useSelector(state => state.auth.isAuthenticate)

    // const handleSubmit = (e) => {
    //     setLogin(false);
    //     e.preventDefault();
    //     const userData = {
    //         email,
    //         password
    //     }
    //     dispatch(login(userData))
    //     props.history.push("/login")true
    // }

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    return (
        <>
            <header className="main-header">
                <div className="main-header__icon">
                    <a>
                        <img src="/images/logo.png" style={{ width: '120px' }} />
                        <h5>Wooden Chocolate</h5>
                    </a>
                </div >
                <div className="main-header__search">
                    <Search
                        placeholder="search movie"
                        onSearch={value => console.log(value)}
                        style={{ width: 600 }}
                    />
                </div>
            </header>
            {/* <Modal open={login} onClose={onCloseModal}>
                <div className="modal-body">
                    <h2>Login and Get <span>Started</span></h2>
                    <span className="subtitle">Just fill in the form below</span>
                    <form className="contact-form form-validate4" novalidate="novalidate">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                required=""
                                autocomplete="off"
                                aria-required="true"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="pass"
                                className="form-control"
                                placeholder="Password"
                                required=""
                                autocomplete="off"
                                aria-required="true"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="btn btn-md btn-primary btn-center"
                            id="login_btn"
                        // onClick={handleSubmit}
                        >
                            LOG IN
                        </button>
                    </form>
                </div>
            </Modal> */}
        </>
    )
}

