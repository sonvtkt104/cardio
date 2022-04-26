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
                    <p>Chúng tôi cung cấp thực đơn bữa ăn hàng ngày cho những người bệnh tim mạch và người có nguy cơ mắc bệnh tim mạch.</p>
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
                            <p>Nếu bạn đã dành trọn thời gian để chăm sóc một đóa hồng, thì đóa hồng đó sẽ trở nên vô cùng quan trọng với bạn.(Hoàng từ bé)</p>
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
                            <p>Nếu bạn đã dành trọn thời gian để chăm sóc một đóa hồng, thì đóa hồng đó sẽ trở nên vô cùng quan trọng với bạn.(Hoàng từ bé)</p>
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
                            <p>Nếu bạn đã dành trọn thời gian để chăm sóc một đóa hồng, thì đóa hồng đó sẽ trở nên vô cùng quan trọng với bạn.(Hoàng từ bé)</p>
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
                            <p>Nếu bạn đã dành trọn thời gian để chăm sóc một đóa hồng, thì đóa hồng đó sẽ trở nên vô cùng quan trọng với bạn.(Hoàng từ bé)</p>
                        </div>
                        
                    </div>
                </div>
                <div id="FAQ" className="faq">
                    <h2>Frequently Asked Question</h2>
                    <div>
                        <div className="faq-item" onClick={handleClick1}>
                            <div>
                                <span>Điểm khác biệt ở Cardio?</span>
                                {
                                    fqa1 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa1 ? "active" : ""}>
                                <p>- Thực đơn phong phú</p>
                                <p>- Kiến thức dinh dưỡng cũng như bệnh Tim Mạch chi tiết, đầy đủ</p>
                                <p>- Test nhanh các chỉ số BMI, dự đoán nguy cơ béo phì, THA và biến chứng tim mạch… ( Các yếu tố nguy cơ trong phòng ngừa và kiểm soát bệnh TM như Testest nhanh các chỉ số BMI, dự đoán nguy cơ béo phì, THA và biến chứng tim mạch… )</p>
                                <p>- Tư vấn thay đổi lối sống, cải thiện chất lượng cuộc sống</p>
                                <p>- Tương tác, cảm nhận sự cải thiện của người dùng thông qua kênh Chat</p>
                            </div>
                        </div>
                        <div className="faq-item" onClick={handleClick2}>
                            <div>
                                <span>Những gì trang web mang lại cho tôi?</span>
                                {
                                    fqa2 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa2 ? "active" : ""}>
                                <p>- Bạn được cung cấp các thông tin về bệnh, tin tức hàng ngày liên quan đến bệnh lý tim mạch</p>
                                <p>- Bạn được hướng dẫn theo 1 chế độ ăn tốt tốt cho người bệnh tim mạch và được gợi ý thực đơn ăn uống của 1 tuần</p>
                                <p>- Test nhanh các chỉ số BMI, dự đoán nguy cơ béo phì, THA và biến chứng tim mạch… ( Các yếu tố nguy cơ trong phòng ngừa và kiểm soát bệnh TM như Testest nhanh các chỉ số BMI, dự đoán nguy cơ béo phì, THA và biến chứng tim mạch… )</p>
                                <p>- Bạn được gợi ý các bài tập thể lực và có thể theo dõi quá trình của mình</p>
                                <p>- Cho bạn biết về nguy cơ béo phì, tăng huyết áp hoặc nguy cơ biến bệnh chứng tim mạch ở người bệnh</p>
                            </div>
                        </div>
                        <div className="faq-item" onClick={handleClick3}>
                            <div>
                                <span>Tại sao dinh dưỡng quan trọng trong bệnh lý Tim Mạch?</span>
                                {
                                    fqa3 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa3 ? "active" : ""}>
                                <p>Bệnh tim mạch (CVD) là nguyên nhân chính gây tử vong và nhập viện ở Việt Nam. Trên thực tế, sự can thiệp của chế độ ăn uống cho phép kết hợp nhiều loại thực phẩm và chất dinh dưỡng tốt hơn. Do đó, một chế độ ăn uống lành mạnh cho thấy nhiều tác dụng có lợi hơn tác dụng của việc bổ sung một chất dinh dưỡng đơn lẻ.</p>
                            </div>
                        </div>
                        <div className="faq-item" onClick={handleClick4}>
                            <div>
                                <span>8 bước để ngăn ngừa bệnh tim với chế độ ăn uống tốt cho Tim Mạch?</span>
                                {
                                    fqa4 ? <MinusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/> : <PlusCircleOutlined style={{color: 'var(--color-blue)', fontSize: '18px'}}/>
                                }
                            </div>
                            <div className={fqa4 ? "active" : ""}>
                                <p>- Kiểm soát khẩu phần ăn của bạn</p>
                                <p>- Ăn nhiều rau củ và trái cây</p>
                                <p>- Chọn ngũ cốc nguyên hạt</p>
                                <p>- Hạn chế chất béo không lành mạnh</p>
                                <p>- Chọn nguồn protein ít chất béo</p>
                                <p>- Giảm muối trong thức ăn của bạn</p>
                                <p>- Lên kế hoạch, tạo thực đơn hàng ngày</p>
                                <p>- Thỉnh thoảng cho phép bản thân được ưu đãi</p>
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
                                <h3>Những gì trang web mang lại cho tôi?</h3>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                        <div className="landing-blog-item">
                            <img src={salad} alt="" />
                            <div>
                                <p>8 June 2021</p>
                                <h3>Những gì trang web mang lại cho tôi?</h3>
                                <a href="/">Read more</a>
                            </div>
                        </div>
                        <div className="landing-blog-item">
                            <img src={salad} alt="" />
                            <div>
                                <p>8 June 2021</p>
                                <h3>Những gì trang web mang lại cho tôi?</h3>
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
                        <div><p style={{marginBottom: '10px', fontSize: '13px', color: '#a3a3a3'}}>Copyright © 2022 Xuan Son</p></div>
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