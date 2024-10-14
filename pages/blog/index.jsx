import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Blog_page(props) {
  const {local} = useRouter();
     props.Blog_page.blog_arr.map((item, i)=>{
             return console.log(item.title) 
     })
  return (
    <>
     <Head>
       <title>Blog | Fast Track Visa </title>
       <meta name="description" content={`If you’ve arrived here, we share a common passion: a deep love for travel. Whether you're seeking inspiration, planning tips for your next holiday, or simply an engaging read, we've got you covered.`} />
       <link rel="canonical" href={`https://fasttrackvisa.com/${props.country_ext}/blog`}/>
     </Head>
    <section className="blog_page">
      <div className="checkout_banner">
        <Container>
          <h1>Blog</h1>
        </Container>
      </div>
      <div className="blog-sec pt-0">
        <Container>
          <ol className="breadcrumb pl-0">
            <li className="breadcrumb-item">
              <Link href={"/"}>Home </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
          
          <Row className="mt-5">
            {props.Blog_page.blog_arr.map((blog_arr, i) =>
              <Col sm={12} md={4} lg={4} key={blog_arr.id}>                
                <div className="blog-boxes" title={blog_arr.title}>                  
                  <Link href={"/blog/" + blog_arr.blogtitle}>
                    <div className="img-content">
                      <div className="img-thum">
                      <Image
                        alt={blog_arr.title}
                       
                         src={
                           blog_arr.title == "Beyond the Tourist Traps: A Generic Guide to Experiencing Real Culture while Traveling" ? '/blog/Beyond the Tourist Traps A Generic Guide to Experiencing Real Culture while Traveling.webp' :
                           blog_arr.title == "Crafting a Uniquely Luxurious Travel Experience." ? '/blog/Crafting a Uniquely Luxurious Travel Experience.webp' :
                          blog_arr.title == "From Backpacks to Briefcases: A Generic Travel Guide for the Modern Nomad" ? '/blog/From Backpacks to Briefcases.webp':
                           blog_arr.title == "How do you apply for an India visa?"? '/blog/How do you apply for an India visa.webp':
                           blog_arr.title == "How do you check your India visa status?"? '/blog/How do you check your India visa status.webp':
                           blog_arr.title == "How Much Is A Tourist Visa To India From the USA?"? '/blog/How Much Is A Tourist Visa To India From the USA.webp':
                           blog_arr.title == "New Zealand E Visitor Visa: Overall Guide"? '/blog/New Zealand E Visitor Visa Overall Guide.webp':
                           blog_arr.title == "How to choose the best Visa?"? '/blog/How to choose the best Visa.webp':
                           blog_arr.title == "How To Get the India Business Visa?"? '/blog/How To Get the India Business Visa.webp':
                           blog_arr.title == "India business visa checklist"? '/blog/India business visa checklist.webp':
                           blog_arr.title == "India Tourist Visa Guidelines"? '/blog/India Tourist Visa Guidelines.webp':
                           blog_arr.title == "Indian business visa for Singapore citizens"? '/blog/Indian business visa for Singapore citizens.webp':
                           blog_arr.title == "The Ultimate Generic Guide for Exploring the World"? '/blog/The Ultimate Generic Guide for Exploring the World.webp':
                           blog_arr.title == "What are the different types of Indian visas"? '/blog/What are the different types of Indian visas.webp':
                           blog_arr.title == "What are the most common mistakes while Travelling"? '/blog/What are the most common mistakes while Travelling.webp':
                           blog_arr.title == "What are the perks of having Evisa"? '/blog/What are the perks of having Evisa.webp':
                          blog_arr.title == "What countries are visa-free to India?"? '/blog/what countries are visa free to India.webp':

                          blog_arr.title == "Business Visa for Australian Citizens to India"? '/blog/Business Visa for Australian Citizens to India.webp':
                          blog_arr.title == "CAN I GET AN AUSTRALIA VISA EXTENSION?"? '/blog/CAN I GET AN AUSTRALIA VISA EXTENSION.webp':
                          blog_arr.title == "Difference Between a Normal Visa and Evisa"? '/blog/Difference Between a Normal Visa and Evisa.webp':
                          blog_arr.title == "Dont commit these mistakes while traveling to Britain"? '/blog/Dont commit these mistakes while traveling to Britain.webp':
                          blog_arr.title == " E-Business Visa For India and Important Documents Required"? '/blog/E-Business Visa For India and Important Documents Required.webp':
                          blog_arr.title == "How much does an India visa cost?"? '/blog/How much does an India visa cost.webp':
                          blog_arr.title == "How safe is India for Canadians?"? '/blog/How safe is India for Canadians.webp':
                          blog_arr.title == "How to apply for Online Visa in a few Steps?"? '/blog/How to apply for Online Visa in a few Steps.webp':
                          blog_arr.title == "How to Get Indian Business Visa in a few steps"? '/blog/How to Get Indian Business Visa in a few steps.webp':
                          blog_arr.title == "India business visa for Australian citizens"? '/blog/India business visa for Australian citizens.webp':
                          blog_arr.title == "India business visa processing time and duration, fees, and costs"? '/blog/India business visa processing time and duration, fees, and costs.webp':
                          blog_arr.title == "India Comes Alive when Monsoon Season Arrives | iVisa"? '/blog/India Comes Alive when Monsoon Season Arrives.webp':
                          blog_arr.title == "India Visa for the citizens of Kenya"? '/blog/India Visa for the citizens of Kenya.webp':
                          blog_arr.title == "India Visa for Malaysians, All You need to know"? '/blog/India Visa for Malaysians, All You need to know.webp':
                          blog_arr.title == "INDIA VISA FOR SOUTH AFRICAN PASSPORT HOLDERS"? '/blog/INDIA VISA FOR SOUTH AFRICAN PASSPORT HOLDERS.webp':
                          blog_arr.title == "India visa for Sri Lankan citizens"? '/blog/India visa for Sri Lankan citizens.webp':
                          blog_arr.title == " Indian business visa for UK citizens - requirements and cost"? '/blog/Indian business visa for UK citizens - requirements and cost.webp':
                          blog_arr.title == "Indian Business visa for US citizens"? '/blog/Indian Business visa for US citizens.webp':
                          blog_arr.title == "Indian Visa for Chinese citizens - Everything you need to know"? '/blog/Indian Visa for Chinese citizens - Everything you need to know.webp':
                          blog_arr.title == "Is India a safe destination for the British?"? '/blog/Is India a safe destination for the British.webp':
                          blog_arr.title == "The Best Restaurants and Attractions at Luxury Destinations."? '/blog/The Best Restaurants and Attractions at Luxury Destinations.webp':
                          blog_arr.title == "Touring the World's Most Exclusive Yachts and Cruise Ships."? '/blog/Touring the World_s Most Exclusive Yachts and Cruise Ships.webp':
                          blog_arr.title == "Travel Guide to Malaysia"? '/blog/Travel Guide to Malaysia.webp':
                          blog_arr.title == "Indian Visa for UK Citizens Fee, Requirements & More"? '/blog/Indian Visa for UK Citizens Fee, Requirements & More.webp':
                          blog_arr.title == "INDIA'S ELECTRONIC VISA AND ITS DIFFERENT ASPECTS"? '/blog/INDIAS ELECTRONIC VISA AND ITS DIFFERENT ASPECTS.webp':
                          blog_arr.title == "India eVisa for Canadian Citizens: Requirements, Costs, and More"? '/blog/India eVisa for Canadian Citizens Requirements, Costs, and More.webp':
                         
                          '/img/abrand-1.jpg' }
                        sizes="(max-width:750px) 50vw, 20wv"
                        fill style={{
                          objectFit: 'cover', // cover, contain, none
                        }}
                      />
                     </div>
                    <h2>{blog_arr.title}</h2>
                    </div>
                  </Link>
                  <p>{blog_arr.blog_des}</p>
                   <div className="caption">
                        <Link href={"/blog/" + blog_arr.blogtitle} className="admin-icon"> 
                        <Image
                            alt="Kanan"
                            src={"/img/testi1.png"}
                            sizes="(max-width:750px) 30vw, 15wv"
                            height={30}
                            width={30}
                          />
                          <p className="admin"> {blog_arr.by}</p>
                        </Link> 
                        <p>{blog_arr.date}</p>
                   </div>                
                </div>
              </Col>
            )}
          </Row>

          <div className="text-center">
            {props.Blog_page.current_page - 1 === 0
              ? <span className="btn btn-secondary mr-2">Prev Page</span>
              : <Link
                  className={`btn btn-dark mr-2`}
                  href={"/blog?page=" + (props.Blog_page.current_page - 1)}
                >
                  Prev Page
                </Link>}
            {
             
            }
            {props.Blog_page.last_page == props.Blog_page.current_page
              ? <span className="btn btn-secondary">Next Page</span>
              : <Link
                  className="btn btn-dark"
                  href={"/blog?page=" + (props.Blog_page.current_page + 1)}
                >
                  Next Page{" "}
                </Link>}
          </div> 
        </Container>

        {/* <Widget_v ce_name="" /> */}
      </div>
    </section>
    </>
  );
}
export const getServerSideProps = async(cxt)=>{
  const pageurl2 = cxt.query.page; 
  const country_ext = cxt.locale;
  const res = await fetch(`https://cms.fasttrackvisa.com/api/blogs${(pageurl2 === undefined ? '' : '?page=' + pageurl2)}`);
  if (!res.ok){
    return{
      notFound: true,
    }
   }
  const Blog_page = await res.json()
  //console.log(Blog_page)
  return{
     props: {Blog_page, country_ext}
  }
} 