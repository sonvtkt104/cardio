
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
                            <h3>Nh???n bi???t 6 d???u hi???u th?????ng g???p c???a b???nh tim m???ch</h3>
                            <p>APR 26 * 20 MIN READ</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/articles/tai-sao-dinh-duong-quan-trong-trong-benh-tim-mach">
                        <div>
                            <img src={thucphamsach} alt="" />
                        </div>
                        <p><span className="thuc-pham">Thuc pham</span> Xuan Son</p>
                        <h3>T???i sao dinh d?????ng quan tr???ng trong b???nh l?? Tim M???ch</h3>
                        <p>APR 26 * 20 MIN READ</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/articles/nhung-gi-trang-web-mang-lai-cho-toi">
                        <div>
                            <img src={nghiencuu} alt="" />
                        </div>
                        <p><span className="nghien-cuu">Nghien cuu</span>Xuan Son</p>
                        <h3>Nh???ng g?? trang web mang l???i cho t??i?</h3>
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
                            <h3>8 b?????c ????? ng??n ng???a b???nh tim v???i ch??? ????? ??n u???ng t???t cho Tim M???ch</h3>
                            <p>Ph??t tri???n t??? nh???ng khu r???ng r???m nhi???t ?????i v??ng Nam M???, A??ai l?? lo???i qu??? m???ng, m??u t??m ?????m, k??ch th?????c g???n b???ng tr??i nho...</p>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                    </div>
                    <div >
                        <div>
                            <img src={thucpham1} alt="" />
                        </div>
                        <div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 b?????c ????? ng??n ng???a b???nh tim v???i ch??? ????? ??n u???ng t???t cho Tim M???ch</h3>
                            <p>Ph??t tri???n t??? nh???ng khu r???ng r???m nhi???t ?????i v??ng Nam M???, A??ai l?? lo???i qu??? m???ng, m??u t??m ?????m, k??ch th?????c g???n b???ng tr??i nho...</p>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                    </div>
                    <div >
                        <div>
                            <img src={thucpham1} alt="" />
                        </div>
                        <div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 b?????c ????? ng??n ng???a b???nh tim v???i ch??? ????? ??n u???ng t???t cho Tim M???ch</h3>
                            <p>Ph??t tri???n t??? nh???ng khu r???ng r???m nhi???t ?????i v??ng Nam M???, A??ai l?? lo???i qu??? m???ng, m??u t??m ?????m, k??ch th?????c g???n b???ng tr??i nho...</p>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                    </div>
                    <div >
                        <div>
                            <img src={thucpham1} alt="" />
                        </div>
                        <div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 b?????c ????? ng??n ng???a b???nh tim v???i ch??? ????? ??n u???ng t???t cho Tim M???ch</h3>
                            <p>Ph??t tri???n t??? nh???ng khu r???ng r???m nhi???t ?????i v??ng Nam M???, A??ai l?? lo???i qu??? m???ng, m??u t??m ?????m, k??ch th?????c g???n b???ng tr??i nho...</p>
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
                        <div><p style={{marginBottom: '10px', fontSize: '13px', color: '#a3a3a3'}}>Copyright ?? 2022 Xuan Son</p></div>
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