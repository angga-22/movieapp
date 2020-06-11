import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import image from '../style/images/logo.png'
import '../style/mainheader.scss';

const MainHeader = () => {
	const { Search } = Input;

	const suffix = (
		<AudioOutlined
			style={{fontSize: '16', color: '#1890ff'}}
		/>
	)

	return(
		<header className='main-header'>
			<div className='main-header__icon'>
				<a> <img src={image} alt='' className='logo'/>
				<h5> Wooden Chocolate </h5>
				</a>
			</div>

			<div className='main-header__search'>
				<Search
					placeholder='search movie'
					onSearch={value => console.log(value)}
					style={{width: 800}}
				/>
			</div>

			<div className='main-header__signiup'>
				<Link to='/login'>
					<a> Sign UP </a>
				</Link>
			</div>
		</header>
	)
}

export default MainHeader;