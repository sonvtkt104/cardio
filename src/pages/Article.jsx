
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import {SearchOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined, GithubOutlined} from '@ant-design/icons'
import nghiencuu from '../images/nghiencuu.png'
import timmach from '../images/timmach.png';
import thucphamsach from '../images/thucphamsach.png';
import thucpham1 from '../images/thucpham1.png';

export default function Article() {
    return (
         <div className="articles">
             <header id="header1">
                <div class="header-left">
                    <Link to="/"><p style={{color: "var(--color-blue)"}}>Cardio</p></Link>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/articles">Article</Link></li>
                    <li><Link to="#FAQ">FAQ</Link></li>
                </ul>
                <div class="header-right">
                    <SearchOutlined style={{ fontSize: '20px', marginRight: '20px' }} />
                    <Link to="/sign-in"><Button style={{ padding: '5px 20px', width: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '5px', fontFamily: 'Poppins' }} type="primary">Sign In &gt;</Button></Link>
                </div>
            </header>
            <div className="article-top">
                <div className="article-top-header">
                    <h3>Top Articles</h3>
                    <div><Link to="">See All</Link></div>
                </div>
                <div className="article-top-content">
                    <div >
                        <Link to="/articles/nhan-biet-6-dau-hieu-thuong-gap-cua-benh-tim-mach">
                            <div>
                                <img src={timmach} alt="" />
                            </div>
                            <p><span className="tim-mach">Tim mach</span> Thuy Pham</p>
                            <h3>Nhận biết 6 dấu hiệu thường gặp của bệnh tim mạch</h3>
                            <p>APR 26 * 20 MIN READ</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/articles/tai-sao-dinh-duong-quan-trong-trong-benh-tim-mach">
                        <div>
                            <img src={thucphamsach} alt="" />
                        </div>
                        <p><span className="thuc-pham">Thuc pham</span> Xuan Son</p>
                        <h3>Tại sao dinh dưỡng quan trọng trong bệnh lý Tim Mạch</h3>
                        <p>APR 26 * 20 MIN READ</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/articles/nhung-gi-trang-web-mang-lai-cho-toi">
                        <div>
                            <img src={nghiencuu} alt="" />
                        </div>
                        <p><span className="nghien-cuu">Nghien cuu</span>Xuan Son</p>
                        <h3>Những gì trang web mang lại cho tôi?</h3>
                        <p>APR 26 * 20 MIN READ</p>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="article-list-topic">
                    <span className="active">Tim mach</span>
                    <span>Thuc pham</span>
                    <span>Nghien cuu</span>
                </div>
                <div className="article-list">
                    <div >
                        <div>
                            <img src={thucpham1} alt="" />
                        </div>
                        <div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 bước để ngăn ngừa bệnh tim với chế độ ăn uống tốt cho Tim Mạch</h3>
                            <p>Phát triển từ những khu rừng rậm nhiệt đới vùng Nam Mỹ, Açai là loại quả mọng, màu tím đậm, kích thước gần bằng trái nho...</p>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                    </div>
                    <div >
                        <div>
                            <img src={thucpham1} alt="" />
                        </div>
                        <div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 bước để ngăn ngừa bệnh tim với chế độ ăn uống tốt cho Tim Mạch</h3>
                            <p>Phát triển từ những khu rừng rậm nhiệt đới vùng Nam Mỹ, Açai là loại quả mọng, màu tím đậm, kích thước gần bằng trái nho...</p>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                    </div>
                    <div >
                        <div>
                            <img src={thucpham1} alt="" />
                        </div>
                        <div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 bước để ngăn ngừa bệnh tim với chế độ ăn uống tốt cho Tim Mạch</h3>
                            <p>Phát triển từ những khu rừng rậm nhiệt đới vùng Nam Mỹ, Açai là loại quả mọng, màu tím đậm, kích thước gần bằng trái nho...</p>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                    </div>
                    <div >
                        <div>
                            <img src={thucpham1} alt="" />
                        </div>
                        <div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 bước để ngăn ngừa bệnh tim với chế độ ăn uống tốt cho Tim Mạch</h3>
                            <p>Phát triển từ những khu rừng rậm nhiệt đới vùng Nam Mỹ, Açai là loại quả mọng, màu tím đậm, kích thước gần bằng trái nho...</p>
                            <p>APR 26 * 20 MIN READ</p>
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
    )
}