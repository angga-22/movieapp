import React from 'react';
import { Input, Avatar } from 'antd';
import { AudioOutlined, YoutubeFilled } from '@ant-design/icons';
import '../styles/header/loginheader.scss';

const LoginHeader = () => {
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
        <header className="login-header">
            <div className="login-header__icon">
                <a> <YoutubeFilled style={{ fontSize: '100px', color: '#FE024E' }} />
                    <h5>Milan TV</h5>
                </a>
            </div >
            <div className="login-header__search">
                <Search
                    placeholder="search movie"
                    onSearch={value => console.log(value)}
                    style={{ width: 800 }}
                />
            </div>
            <div className="login-header__avatar">
                <a><Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <h5>Username</h5>
                </a>
            </div>
        </header>
    )
}

export default LoginHeader;