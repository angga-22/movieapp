import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Avatar } from 'antd';
import { AudioOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { searchMovie } from '../store/actions/movies';
import useModal from './modal/useModal';
import Modal from './modal/Modal';
import '../assets/styles/header/mainheader.scss';


export default (props) => {
    const { Search } = Input;
    const [title, setTitle] = useState("")
    const [search, setSearch] = useState("")
    const searchData = useSelector(state => state.movies.result)
    //
    const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
    const { isShowing, toggle } = useModal();
    const dispatch = useDispatch()

    const onChange = e => {
        setSearch(e.target.value)
    }
    const onSearch = async () => {
        search === "" ? alert("again?") : dispatch(searchMovie(search))
    }
    //userprofile
    const [userData, setUserData] = useState({
        name: localStorage.getItem("name")
    })
    useEffect(() => {
        if (isAuthenticate) {
            setUserData({
                name: localStorage.getItem("name")
            })
        }
    }, [isAuthenticate])

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
                textAlign: 'right'
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
                        onSearch={onSearch}
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        style={{ width: 600 }}
                    />
                </div>

                {isAuthenticate ?
                    (
                        <div className="avatar">
                            <a><Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <h3>Welcome back</h3>
                            </a>
                        </div>
                    ) :
                    <div className="homepage-modal">
                        <button className="button-default" onClick={toggle}>SIGN IN</button>
                    </div>
                }
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </header>
        </>
    )
}