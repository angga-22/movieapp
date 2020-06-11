import React from 'react';
import { Link } from "react-router-dom";
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import '../styles/header/mainheader.scss';

export default () => {
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    return (
        <header className="main-header">
            <div className="main-header__icon">
                <a>
                    <img src="/images/logo.png" style={{ width: '100px' }} />
                    <h5>Wooden Chocolate</h5>
                </a>
            </div >
            <div className="main-header__search">
                <Search
                    placeholder="search movie"
                    onSearch={value => console.log(value)}
                    style={{ width: 800 }}
                />
            </div>
            <div className="main-header__signup">
                <Link to="/login">
                    <a>Sign Up</a>
                </Link>

            </div>

        </header>
    )
}

