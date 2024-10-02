
import Link from 'next/link'
// import Router from 'next/router'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import LazyLoad from 'react-lazy-load';
import Widget_v from '../../components/Widget_v2';
import ReactHtmlParser from 'react-html-parser';
import Head from 'next/head'

const Blog_page = (props) => {
    const blogDes = ReactHtmlParser(props.Blog_detail.blog_des)
    const metaDescrition = blogDes[0].props.children[0]
   
  return (
    <> 
   <Head>
       <title> {props.Blog_detail.title} | Fast Track Visa </title>
       <meta name="description" content={`${metaDescrition}`} />
    <link rel="canonical" href={`https://fasttrackvisa.com/${props.country_ext}/blog/${props.Blog_detail.title}`}/>
     </Head>
      <div className="blogd-page">                 
                    <div className="checkout_banner">
                        <Container>
                            <h1>{props.Blog_detail.title}</h1>

                        </Container>
                    </div>

                    <Container>

                    <ol className="breadcrumb pl-0">
                            <li className="breadcrumb-item"><Link href={'/'}>
                                
                                    Home
                                
                            </Link></li>
                            <li className="breadcrumb-item"><Link href={'/blog'}>
                                
                                Blog
                                
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{props.Blog_detail.title}</li>
                        </ol>

                         

                        <Row className='mt-5'>
                            <Col sm={1} md={1} lg={1}>
                               <div className='sharediv'> <p className='text-center'>Share</p>
                                <p className='text-center'><a href='#'><i className='fa fa-facebook'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-twitter'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-linkedin'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-instagram'></i></a></p>
                                </div>
                            </Col>

                            <Col sm={11} md={9} lg={9}>
                                <div className="mb-5">
                                   <Widget_v ce_name='en-in'></Widget_v></div>


                                {ReactHtmlParser(props.Blog_detail.blog_des)}


                                <Widget_v ce_name='en-in'></Widget_v>




                                <div className="blog-box mt-4">


                                    <p className='d-flex mb-0 author py-2'>
                                        <Image alt="Kanan"
                                            src={'/img/testi1.png'}
                                            sizes='(max-width:750px) 50vw, 20wv'
                                            height={30} width={30}
                                        />   {props.Blog_detail.by}

                                        <span className='text-right'>PUBLISHED ON {props.Blog_detail.date}</span></p>

                                </div>



                                <h4 className='mt-5'>Comments</h4>
                            </Col>

                            <Col sm={12} md={2} lg={2}>
                                <Link href={'/'}>
                                    
                                        <Image alt="Kanan"
                                            src={'/img/FastTrackVisa 001-160x600-px.gif'}
                                             sizes='(max-width:750px) 50vw, 20wv'
                                            height={600} width={160}
                                        />   
                                    

                                </Link>
                            </Col>

                        </Row>

                    </Container>

                    <hr />
                   

                </div>          
 

   </>
  )
}
export async function getServerSideProps(context){
    const page_url = context.query.article;
    const country_ext = context.locale;
    const res = await fetch(`https://cms.fasttrackvisa.com/api/blog-detail/${page_url}`);
    //console.log(res.data)
    if (res.status === 200) {
        const Blog_detail = await res.json()
        const apistatus = res.status;
        return {
            props: {Blog_detail, apistatus, country_ext}
        }

    }
    else {
        return {
            props:{ Blog_detail, country_ext}
        }
    }
}
export default Blog_page