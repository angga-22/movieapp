import React from 'react';
//we used hooks so we need 
import { useDispatch } from 'react-redux';
import '../style/footer.scss';
import { YoutubeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import MobileStoreButton from 'react-mobile-store-button';
import {SocialMediaIconsReact} from 'social-media-icons-react';



const Footer = () => {
	const dispatch = useDispatch()


	return (
		<footer>
			<div className='footer'>

				<div className='footer__footer-left'>
					<YoutubeOutlined className='youtube' style={{color:'red'}} />
					<h1 className='title'>Milan TV</h1>
					<p className='description'>
					 Lorem ipsum dolor sit amet, consectetur adipisicing elit
					 Accusamus ipsum autem, recusandae nesciunt laboriosam 
					 blanditiis, repellendus aliquam rerum doloribus, deserunt 
					 voluptates suscipit amet sunt reprehenderit similique aperiam 
					</p>
				</div>

				<div className='footer__footer-middle'>
					<ul className='list'>
						<li><Link to='/'>Tentang Kami</Link></li>
						<li><Link to='/'>Blog</Link></li>
						<li><Link to='/'>Layanan</Link></li>
						<li><Link to='/'>Karir</Link></li>
						<li><Link to='/'>Pusat Media</Link></li>
					</ul>
				</div>
				
				<div className='footer__footer-right'>
					<h3 className='title'> Download </h3>
					<div className='store'>
						<MobileStoreButton 
						store='android' className='store-list' />
						<MobileStoreButton 
						store='ios' className='store-list'/>
					</div>
					<h5 className='title'> Social Media </h5>
					<div className='sosmed-list'>
						<SocialMediaIconsReact icon='facebook'  className='sosmed'/>
						<SocialMediaIconsReact icon='pinterest' />
						<SocialMediaIconsReact icon='instagram' />
					</div>
				</div>

			</div>
				<div>
					<p className='copyright'> Copyright &Copy 2000-202 MilanTV. All Rights Reserved </p>
					
				</div>
				
		</footer>
	)
}

export default Footer;