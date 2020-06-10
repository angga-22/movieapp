import React from 'react';
import { Link } from "react-router-dom";
import { Input } from 'antd';
import { AudioOutlined, YoutubeFilled } from '@ant-design/icons';
import '../styles/header/mainheader.scss';

const MainHeader = () => {
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
                <a> <YoutubeFilled style={{ fontSize: '100px', color: '#FE024E' }} />
                    <h5>Milan TV</h5>
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

export default MainHeader;