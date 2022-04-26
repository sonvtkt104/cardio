import { FileSearchOutlined, BookOutlined, ThunderboltOutlined } from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom"
import nghiencuu from '../images/nghiencuu.png'
import timmach from '../images/timmach.png';
import thucphamsach from '../images/thucphamsach.png';

export default function Main() {
    const navigate = useNavigate()
    return (
        <div className="main">
            <h4 style={{ color: 'gray', marginBottom: '0px', fontSize: '16px'}}>Welcome Home</h4>
            <h3 style={{ fontSize: '27px' }}>Xuan Son</h3>
            <div className="main-top">
                <div onClick={e => navigate("/home/today-diary")}>
                    <div><FileSearchOutlined /></div>
                    <div>
                        <h5 style={{ color: '#ffb979' }}>6</h5>
                        <p>Meal Plans</p>
                    </div>
                </div>
                <div onClick={e => navigate("/home/favorite")}>
                    <div style={{ color: '#36af63', backgroundColor: '#d5efdf' }}><BookOutlined /></div>
                    <div>
                        <h5 style={{ color: '#36af63' }}>12</h5>
                        <p>Favorite</p>
                    </div>
                </div>
                <div onClick={e => navigate("/home/quick-test")}>
                    <div style={{ color: 'var(--color-blue)', backgroundColor: 'var(--color-blue-light)', }}><ThunderboltOutlined /></div>
                    <div>
                        <h5 style={{ color: 'var(--color-blue)' }}>1</h5>
                        <p>Quick Test</p>
                    </div>
                    <div style={{ position: 'absolute', top: '0', bottom: '0', right: '0', width: '25%', padding: '0 15px', textAlign: 'center', color: '#323232', borderLeft: '1px solid #dfdfdf', backgroundColor: 'var(--color-blue-light)', borderRadius: '0 15px 15px 0' }}>check it out now</div>
                </div>
            </div>
            <div className="recommended-for-you">
                <h3 style={{ fontSize: '20px', position: 'relative' }}>Recommended For You
                    <Link to="/articles"><span style={{ position: 'absolute', top: '5px', right: '5px', color: 'var(--color-blue)', fontSize: "16px" }}>See All</span></Link>
                </h3>
                <div>
                    <div className="article-top-content">
                        <div >
                            <div>
                                <img src={timmach} alt="" />
                            </div>
                            <p><span className="tim-mach">Tim mach</span> Xuan Son</p>
                            <h3>8 bước để ngăn ngừa bệnh tim với chế độ ăn uống tốt cho Tim Mạch</h3>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                        <div>
                            <div>
                                <img src={thucphamsach} alt="" />
                            </div>
                            <p><span className="thuc-pham">Thuc pham</span> Xuan Son</p>
                            <h3>Tại sao dinh dưỡng quan trọng trong bệnh lý Tim Mạch</h3>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                        <div>
                            <div>
                                <img src={nghiencuu} alt="" />
                            </div>
                            <p><span className="nghien-cuu">Nghien cuu</span>Xuan Son</p>
                            <h3>Những gì trang web mang lại cho tôi?</h3>
                            <p>APR 26 * 20 MIN READ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}