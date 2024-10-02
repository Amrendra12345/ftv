// import Image from 'next/image'
import Link from 'next/link';
// import { useRouter,Router } from 'next/router'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import { useRouter } from 'next/router';
// import Nav from '../../../pages/components/Nav';
// import Footer from '../../../pages/components/Footer';


const My_transactions_in = () => {
	const {locale} = useRouter()
	const [c_ext, setcExt] = useState('');
	const [activeClass, setActiveClass] = useState('hsticky');

	useEffect(() => {
		setcExt(window.location.pathname.split('/')[1])

	}, [])

	return (
		<>

			{/* <header className={'App-header' + ` ${activeClass}`}>
				<Nav ce_name={c_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'my-profile/my-transactions'}> </Nav>
			</header> */}

			<div className="checkout_banner">

				<Container>
					<h1 className='mt-5'>Welcome back, </h1>
					<p>Here's your account details.</p>
				</Container>
			</div>


			<Container>
			<ol className="breadcrumb pl-0 bg-white">
					<li className="breadcrumb-item"><Link href={'/'}> Home	</Link></li>
					<li className="breadcrumb-item"><Link href={'/my-profile'}>My Profile </Link></li>
					<li className="breadcrumb-item active" aria-current="page"> My Transactions </li>
				</ol>

				<div className="desi-work-container pt-3">

					<Row>
						<Col sm={12} md={3} lg={3}>
							<ul className='profile_ul'>
								<li><Link href={`/my-profile/my-transactions`} locale={false}><i className='fa fa-list'></i> My Transactions </Link></li>
								<li><Link href={'/my-profile/change-password'} locale={locale}><i className='fa fa-key'></i> Change Password </Link></li>
								<li><Link href={'/my-profile'} locale={locale}><i className='fa fa-user'></i> Update Profile </Link></li>
							</ul>
						</Col>
						<Col sm={12} md={9} lg={9}>
							 
						</Col>

					</Row>

				</div>



			</Container>

			
		</>

	);

}
export default My_transactions_in; 