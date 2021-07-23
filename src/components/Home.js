import React from 'react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import navtitle from '../images/nav-title.png'
import img_grp from '../images/img-1.png'
import './Home.css'
function Home() {
    return (
        <div className='home-container'>
            <div className='section1-container'>
                <div className='section1-container-left'>
                    <h1 className='section1-heading-black'>Making the most of the ever-growing</h1>
                    <h1 className='section1-heading-red'>Information Technology</h1>
                    <p className='section1-para'>Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <button className='section1-btn'>Read More</button>
                </div>
                <div className='section1-container-right'>
                    <img className='section1-img' src={image1}></img>
                </div>
            </div>
            <div className='section2-container'>
                <div className='section2-container-left'>
                    <img className='section2-img' src={image2}></img>
                </div>
                <div className='section2-container-right'>
                    <h1 className='section2-heading'>Welcome to <span className='section2-heading-red'>Dwidasa Samsara Indonesia (DSI)</span></h1>
                    <p className='section2-para'>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.
                    </p>
                    <p className='section2-para'>Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.
                    </p>
                </div>
            </div>
            <div className='section3-container'>
                <div className='section3-col'>
                    <img className='section3-img' src={img1}></img>
                    <h1 className='section3-heading'>
                        Our Product
                    </h1>
                    <p className='section3-para'>
                        Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.
                    </p>
                    <button className='section3-btn'>Read More</button>
                </div>
                <div className='section3-col'>
                    <img className='section3-img' src={img2}></img>
                    <h1 className='section3-heading'>
                        Our Service
                    </h1>
                    <p className='section3-para'>
                        DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                    </p>
                    <button className='section3-btn'>Read More</button>
                </div>
                <div className='section3-col'>
                    <img className='section3-img' src={img3}></img>
                    <h1 className='section3-heading'>
                        Our technology
                    </h1>
                    <p className='section3-para'>
                        First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.
                    </p>
                    <button className='section3-btn'>Read More</button>
                </div>
            </div>
            <div className='section4-container'>
                <div className='section4-col1'>
                    <img  className='section4-img' src={navtitle}></img>
                    <p className='section4-para'>PT Dwidasa Samsara Indonesia</p>
                    <p className='section4-para'>
                        Ruko Jalur Sutera 29A No. 53
                        Alam Sutera Serpong, Tangerang 15323
                    </p>
                </div>
                <div className='section4-col2'>
                    <h1 className='section4-heading'>Contact</h1>
                    <p className='section4-para'>
                        Phone : +62.21.5314.1135
                    </p>
                    <p className='section4-para'>
                        Fax : +62.21.5314.1135
                    </p>
                    <p className='section4-para'>
                        Email : community@dwidasa.com
                    </p>
                </div>
                <div className='section4-col3'>
                    <img src={img_grp}></img>
                </div>
            </div>
            <div className='footer-section'>
                <p>Copyright © 2015 - Dwidasa Samsara Indonesia</p>
            </div>
        </div>
    )
}

export default Home
