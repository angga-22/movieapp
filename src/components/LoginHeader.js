import React from 'react';
import { Input, Avatar } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import image from '../style/images/logo.png'
import '../style/loginheader.scss';

const LoginHeader = () => {
	const { Search } = Input;
	return (
		<div className='login-header'>
			<div className='login-header__icon'>
				<a> 
					<img src={image} alt='' className='logo'/>
					<h5> Wooden Chocolate </h5>
				</a>
			</div>

			<div className='login-header__search'>
				<Search
					placeholder='search movie'
					onSearch={value => console.log(value)}
					style={{width: 800}}
				/>
			</div>

			<div className='login-header__avatar'>
				<a> 
					<Avatar size={'50'} src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
					<h5> Username </h5>
				</a>
			</div>
		</div>
	)
}

export default LoginHeader;