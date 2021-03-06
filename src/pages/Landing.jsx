import { Link } from 'react-router-dom'
import { SearchOutlined, CheckOutlined,PlusCircleOutlined ,MinusCircleOutlined, LeftOutlined, RightOutlined ,FacebookOutlined, InstagramOutlined, TwitterOutlined, GithubOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import banner from '../images/banner.png'
import banner2 from '../images/banner2.png';
import salad from '../images/salad.jpeg';
import user from '../images/user.jpeg';
import mail from '../images/mail.png';
import { useState } from 'react';


export default function Landing() {
    const [fqa1, setFqa] = useState(false);
    const [fqa2, setFqa2] = useState(false);
    const [fqa3, setFqa3] = useState(false);
    const [fqa4, setFqa4] = useState(false);

    const handleClick1 = () => {
        setFqa(!fqa1);
    }
    const handleClick2 = () => {
        setFqa2(!fqa2);
    }
    const handleClick3 = () => {
        setFqa3(!fqa3);
    }
    const handleClick4 = () => {
        setFqa4(!fqa4);
    }

    return (
        <div className="landing">
            <header id="header1">
                <div className="header-left">
                    <Link to="/"><p style={{color: "var(--color-blue)"}}>Cardio</p></Link>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/articles">Article</Link></li>
                    <li><Link to="#FAQ">FAQ</Link></li>
                </ul>
                <div className="header-right">
                    <SearchOutlined style={{ fontSize: '20px', marginRight: '20px' }} />
                    <Link to="/sign-in"><Button style={{ padding: '5px 20px', width: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '5px', fontFamily: 'Poppins' }} type="primary">Sign In &gt;</Button></Link>

                </div>
            </header>
            <div className="landing-banner">
                <div>
                    <div>Eat <span>Healthy</span></div>
                    <div>Live <span>Long</span></div>
                    <div>Live <span>Strong!</span></div>
                    <p>Ch??ng t??i cung c???p th???c ????n b???a ??n h??ng ng??y cho nh???ng ng?????i b???nh tim m???ch v?? ng?????i c?? nguy c?? m???c b???nh tim m???ch.</p>
                    <Link to="/sign-up">SIGN UP NOW &gt;</Link>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="pricing">
                <div className="pricing-image">
                    {/* <img src={process} alt="process" /> */}
                </div>
                <div className="pricing-description">
                    <div>
                        <img src={banner2} alt="" />
                    </div>
                    <div className="pricing-description-detail">
                        <h3>WHAT WE DO?</h3>
                        <ul>
                            <li>
                                <CheckOutlined style={{marginRight: '10px', fontSize: '20px', color: 'var(--color-blue)'}}/>
                                <p>Meal plan</p>
                            </li>
                            <li>
                                <CheckOutlined style={{marginRight: '10px', fontSize: '20px', color: 'var(--color-blue)'}}/>
                                <p>Cardiovascular quick test</p>
                            </li>
                            <li>
                                <CheckOutlined style={{marginRight: '10px', fontSize: '20px', color: 'var(--color-blue)'}}/>
                                <p>Chat with doctor</p>
                            </li>
                        </ul>
                        <p style={{marginTop: '30px'}}>And more...</p>
                    </div>
                    
                </div>
                <div className="testimonials">
                    <h2>TESTIMONIALS</h2>
                    <div>
                        <div className="testimonial">
                            <div>
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>
                                    <p>Xuan Son</p>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <p>N???u b???n ???? d??nh tr???n th???i gian ????? ch??m s??c m???t ????a h???ng, th?? ????a h???ng ???? s??? tr??? n??n v?? c??ng quan tr???ng v???i b???n.(Ho??ng t??? b??)</p>
                        </div>
                        <div className="testimonial">
                            <div>
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>
                                    <p>Xuan Son</p>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <p>N???u b???n ???? d??nh tr???n th???i gian ????? ch??m s??c m???t ????a h???ng, th?? ????a h???ng ???? s??? tr??? n??n v?? c??ng quan tr???ng v???i b???n.(Ho??ng t??? b??)</p>
                        </div>
                        <div className="testimonial">
                            <div>
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>
                                    <p>Xuan Son</p>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <p>N???u b???n ???? d??nh tr???n th???i gian ????? ch??m s??c m???t ????a h???ng, th?? ????a h???ng ???? s??? tr??? n??n v?? c??ng quan tr???ng v???i b???n.(Ho??ng t??? b??)</p>
                        </div>
                        <div className="testimonial">
                            <div>
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>
                                    <p>Xuan Son</p>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <p>N???u b???n ???? d??nh tr???n th???i gian ????? ch??m s??c m???t ????a h???ng, th?? ????a h???ng ???? s??? tr??? n??n v?? c??ng quan tr???ng v???i b???n.(Ho??ng t??? b??)</p>
                        </div>
                        
                    </div>
                </div>
                <div id="FAQ" className="faq">
                    <h2>Frequently Asked Question</h2>
                    <div>
                        <div className="faq-item" onClick={handleClick1}>
                            <div>
                                <span>??i???m kh??c bi???t ??? Cardio?</span>
                                {
                                    fqa1 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa1 ? "active" : ""}>
                                <p>- Th???c ????n phong ph??</p>
                                <p>- Ki???n th???c dinh d?????ng c??ng nh?? b???nh Tim M???ch chi ti???t, ?????y ?????</p>
                                <p>- Test nhanh c??c ch??? s??? BMI, d??? ??o??n nguy c?? b??o ph??, THA v?? bi???n ch???ng tim m???ch??? ( C??c y???u t??? nguy c?? trong ph??ng ng???a v?? ki???m so??t b???nh TM nh?? Testest nhanh c??c ch??? s??? BMI, d??? ??o??n nguy c?? b??o ph??, THA v?? bi???n ch???ng tim m???ch??? )</p>
                                <p>- T?? v???n thay ?????i l???i s???ng, c???i thi???n ch???t l?????ng cu???c s???ng</p>
                                <p>- T????ng t??c, c???m nh???n s??? c???i thi???n c???a ng?????i d??ng th??ng qua k??nh Chat</p>
                            </div>
                        </div>
                        <div className="faq-item" onClick={handleClick2}>
                            <div>
                                <span>Nh???ng g?? trang web mang l???i cho t??i?</span>
                                {
                                    fqa2 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa2 ? "active" : ""}>
                                <p>- B???n ???????c cung c???p c??c th??ng tin v??? b???nh, tin t???c h??ng ng??y li??n quan ?????n b???nh l?? tim m???ch</p>
                                <p>- B???n ???????c h?????ng d???n theo 1 ch??? ????? ??n t???t t???t cho ng?????i b???nh tim m???ch v?? ???????c g???i ?? th???c ????n ??n u???ng c???a 1 tu???n</p>
                                <p>- Test nhanh c??c ch??? s??? BMI, d??? ??o??n nguy c?? b??o ph??, THA v?? bi???n ch???ng tim m???ch??? ( C??c y???u t??? nguy c?? trong ph??ng ng???a v?? ki???m so??t b???nh TM nh?? Testest nhanh c??c ch??? s??? BMI, d??? ??o??n nguy c?? b??o ph??, THA v?? bi???n ch???ng tim m???ch??? )</p>
                                <p>- B???n ???????c g???i ?? c??c b??i t???p th??? l???c v?? c?? th??? theo d??i qu?? tr??nh c???a m??nh</p>
                                <p>- Cho b???n bi???t v??? nguy c?? b??o ph??, t??ng huy???t ??p ho???c nguy c?? bi???n b???nh ch???ng tim m???ch ??? ng?????i b???nh</p>
                            </div>
                        </div>
                        <div className="faq-item" onClick={handleClick3}>
                            <div>
                                <span>T???i sao dinh d?????ng quan tr???ng trong b???nh l?? Tim M???ch?</span>
                                {
                                    fqa3 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa3 ? "active" : ""}>
                                <p>B???nh tim m???ch (CVD) l?? nguy??n nh??n ch??nh g??y t??? vong v?? nh???p vi???n ??? Vi???t Nam. Tr??n th???c t???, s??? can thi???p c???a ch??? ????? ??n u???ng cho ph??p k???t h???p nhi???u lo???i th???c ph???m v?? ch???t dinh d?????ng t???t h??n. Do ????, m???t ch??? ????? ??n u???ng l??nh m???nh cho th???y nhi???u t??c d???ng c?? l???i h??n t??c d???ng c???a vi???c b??? sung m???t ch???t dinh d?????ng ????n l???.</p>
                            </div>
                        </div>
                        <div className="faq-item" onClick={handleClick4}>
                            <div>
                                <span>8 b?????c ????? ng??n ng???a b???nh tim v???i ch??? ????? ??n u???ng t???t cho Tim M???ch?</span>
                                {
                                    fqa4 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa4 ? "active" : ""}>
                                <p>- Ki???m so??t kh???u ph???n ??n c???a b???n</p>
                                <p>- ??n nhi???u rau c??? v?? tr??i c??y</p>
                                <p>- Ch???n ng?? c???c nguy??n h???t</p>
                                <p>- H???n ch??? ch???t b??o kh??ng l??nh m???nh</p>
                                <p>- Ch???n ngu???n protein ??t ch???t b??o</p>
                                <p>- Gi???m mu???i trong th???c ??n c???a b???n</p>
                                <p>- L??n k??? ho???ch, t???o th???c ????n h??ng ng??y</p>
                                <p>- Th???nh tho???ng cho ph??p b???n th??n ???????c ??u ????i</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="landing-blog">
                    <h2>Blogs</h2>
                    <div>
                        <div className="landing-blog-item">
                            <img src={salad} alt="" />
                            <div>
                                <p>8 June 2021</p>
                                <h3>Nh???ng g?? trang web mang l???i cho t??i?</h3>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                        <div className="landing-blog-item">
                            <img src={salad} alt="" />
                            <div>
                                <p>8 June 2021</p>
                                <h3>Nh???ng g?? trang web mang l???i cho t??i?</h3>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                        <div className="landing-blog-item">
                            <img src={salad} alt="" />
                            <div>
                                <p>8 June 2021</p>
                                <h3>Nh???ng g?? trang web mang l???i cho t??i?</h3>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                    </div>
                    <LeftOutlined style={{position: 'absolute', left: '8%', top: '50%', backgroundColor: 'white', width: '40px', height: '40px', borderRadius: '50%', lineHeight: '45px', fontSize: '20px', cursor: 'pointer'}}/>
                    <RightOutlined style={{position: 'absolute', right: '8%', top: '50%', backgroundColor: 'white', width: '40px', height: '40px', borderRadius: '50%', lineHeight: '45px', fontSize: '20px', cursor: 'pointer'}}/>
                </div>
                <div className="landing-mail">
                    <div><img src={mail} alt="" /></div>
                    <div>
                        <h2>Subscribe now</h2>
                        <p>Subscribers in our newsletter get a special discount!</p>
                        <div>
                            <input type="text" placeholder="Email address"/>
                            <button>SUBSCRIBE</button>
                        </div>

                    </div>
                </div>
                <div className="landing-page-footer">
                    <div><Link to="/sign-in">SIGN IN</Link></div>
                    <div>
                        <span><FacebookOutlined /></span>
                        <span><InstagramOutlined /></span>
                        <span><GithubOutlined /></span>
                        <span><TwitterOutlined /></span>
                        <span><YoutubeOutlined /></span>
                    </div>
                    <div>
                        <div><h2 style={{fontSize: '25px'}}>Cardio</h2></div>
                        <div><p style={{marginBottom: '10px', fontSize: '13px', color: '#a3a3a3'}}>Copyright ?? 2022 Xuan Son</p></div>
                        <div>
                            <span>Contact</span>
                            <span>About Us</span>
                            <span>FAQ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}