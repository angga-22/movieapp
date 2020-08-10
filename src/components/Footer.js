import React from 'react';
//we used hooks so we need 
import { useDispatch } from 'react-redux';
import '../assets/styles/footer/footer.scss';
import {
	FacebookOutlined,
	InstagramOutlined,
	LinkedinOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import MobileStoreButton from 'react-mobile-store-button';
import images from '../assets/images/logo.png';

const Footer = () => {
	const dispatch = useDispatch()


	return (
		<footer>
			<div className='footer'>

				<div className='footer__footer-left'>
					<img src={images} alt='' className='images' />
					<h1 className='title'>Wooden Chocolate</h1>
					<p className='description'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
						Accusamus ipsum autem, recusandae nesciunt laboriosam
						blanditiis, repellendus aliquam rerum doloribus, deserunt
						voluptates suscipit amet sunt reprehenderit similique aperiam
					</p>
				</div>

				<div className='footer__footer-middle'>
					<ul className='list'>
						<li><Link to='/' style={{ color: '#f2dfd0' }}>Tentang Kami</Link></li>
						<li><Link to='/' style={{ color: '#f2dfd0' }}>Blog</Link></li>
						<li><Link to='/' style={{ color: '#f2dfd0' }}>Layanan</Link></li>
						<li><Link to='/' style={{ color: '#f2dfd0' }}>Karir</Link></li>
						<li><Link to='/' style={{ color: '#f2dfd0' }}>Pusat Media</Link></li>
					</ul>
				</div>

				<div className='footer__footer-right'>
					<h3 className='title'> Download </h3>
					<div className='store'>
						<MobileStoreButton
							store='android' className='android' />
						<MobileStoreButton
							store='ios' className='ios' />
					</div>
					<h5 className='title'> Social Media </h5>
					<div className='sosmed-list'>
						<FacebookOutlined className='sosmed' />
						<InstagramOutlined className='sosmed' />
						<LinkedinOutlined className='sosmed' />
					</div>
				</div>

			</div>

			<div>
				<p className='copyright'> Copyright &Copy 2020-202 Wooden Chocolate. All Rights Reserved </p>
			</div>

		</footer>
	)
}

export default Footer;