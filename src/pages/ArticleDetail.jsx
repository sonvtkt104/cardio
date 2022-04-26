import {Button , Empty} from 'antd'
import timmach from '../images/timmach.png';
import danhtrongnguc from '../images/danhtrongnguc.jpeg';
import user from '../images/user.jpeg'

import {SearchOutlined, FacebookOutlined, InstagramOutlined, GithubOutlined, TwitterOutlined, YoutubeOutlined, LeftOutlined} from '@ant-design/icons'

import { Link , useParams} from "react-router-dom"

export default function ArticleDetail () {

    const {articleKey} = useParams()

    return (
        <div className="article-detail">
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
            <div className='article-content' style={{position: 'relative'}}>
                <Link style={{position: 'absolute', top: '30px', left: '2%', fontSize: '18px', }} to="/articles"><LeftOutlined></LeftOutlined> Back</Link>
                {
                    articleKey === 'nhan-biet-6-dau-hieu-thuong-gap-cua-benh-tim-mach'
                    ? (
                        <div className="article-content-item">
                            <div style={{display: 'flex', marginBottom: '30px'}}>
                                <div style={{flexBasis: '50%', marginRight:'15px'}}><img style={{width: '100%'}} src={timmach} alt="" /></div>
                                <div>
                                    <h3 style={{fontSize: '20px',}}>Nhận biết 6 dấu hiệu thường gặp của bệnh tim mạch</h3>
                                    <p><span className="tim-mach">Tim mach</span></p>
                                    <div style={{display: 'flex', marginTop: '20px'}}> 
                                        <div style={{flexBasis: '10%', marginRight: '15px'}}><img style={{width: '100%', borderRadius: '50%'}} src={user} alt="" /></div>
                                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                            <span style={{fontWeight: 'bold'}}>Thuy Pham</span>
                                            <span style={{color: 'grey'}}>APR 26, 2022</span>                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h5>1. Đau ngực nghĩ do tim</h5>
                                    <p>Mặc dù đau ngực thường gặp ở bệnh tim mạch, tuy nhiên một số trường hợp người bệnh tim mạch chỉ cảm giác mơ hồ chứ chưa hẳn là đau thực sự. Mô tả về một <b>cơn đau ngực</b> do nhồi máu cơ tim hoặc bệnh tim mạch thông thường có một hoặc vài dấu hiệu sau:</p>
                                    <ul>
                                        <li>Cảm giác căng, nóng, ép chặt hay bóp nghẹt lồng ngực.</li>
                                        <li>Đau lan sau lưng, vùng cổ, hàm, vai và 1 hoặc cả 2 cánh tay.</li>
                                        <li>Cơn đau kéo dài hơn vài phút, cảm giác nặng hơn khi gắng sức hay vận động, cơn đau hết sau đó quay trở lại tần suất và cường độ có thể thay đổi.</li>
                                        <li>Khó thở</li>
                                        <li>Đổ mồ hôi.</li>
                                        <li>Chóng mặt hoặc cảm giác yếu ớt hẳn</li>
                                        <li>Nôn ói hoặc ói.</li>
                                    </ul>
                                    <p>Ngoài ra, <b>đau tức ngực</b> còn là biểu hiện của nhiều bệnh lý khác từ nhẹ đến nặng, tuy nhiên bệnh tim mạch là phổ biến nhất, và cũng là nguy hiểm nhất, cần phải phát hiện và điều trị sớm. Vì vậy nên bạn đừng bao giờ phớt lờ triệu chứng đau tức ở vùng ngực, cho dù chỉ là thoáng qua.</p>
                                </div>
                                <div>
                                    <h5>2. <b>Đánh trống ngực</b> là dấu hiệu bệnh tim mạch</h5>
                                    <div style={{display: 'flex', marginBottom: '10px' }}>
                                        <p style={{flexBasis:'48%', marginRight: '20px'}}>Đánh trống ngực là tình trạng đập bất thường của tim, và cũng là triệu chứng khá phổ biến báo hiệu bệnh tim mạch. Hầu hết bệnh nhân mô tả về tình trạng đánh trống ngực giống như sự lệch nhịp của tim (gần như tim tạm dừng hoạt động, thường theo sau một nhịp đập đặc biệt mạnh) hoặc nhịp tim nhanh, chậm bất thường.</p>
                                        <div style={{flexBasis: '40%',}}><img style={{width: '100%'}} src={danhtrongnguc} alt="" /></div>
                                    </div>
                                    <p>Như vậy, <b>rối loạn nhịp tim</b>, hay nhịp tim bất thường, chính là nguyên nhân gây ra tình trạng đánh trống ngực của bệnh nhân. Có rất nhiều loại loạn nhịp tim mà bệnh nhân có thể gặp phải, và gần như tất cả chúng đều có xu hướng khiến cho tim đập nhanh hơn. Bệnh nhân có thể nhận ra tình trạng này trong hồ sơ bệnh án của mình với những cái tên như: ngoại tâm thu nhĩ , ngoại tâm thu thất, rung nhĩ và nhịp tim nhanh trên thất. Một số trường hợp đánh trống ngực khi tim bất chợt đập rất nhanh (như <b>rung nhĩ</b>, nhịp nhanh trên thất) và cần phải đến bệnh viện ngay lập tức</p>
                                </div>
                                <div>
                                    <h5>3. Cảm thấy hoa mắt chóng mặt</h5>
                                    <p>Chóng mặt, choáng váng thường gặp ở bệnh nhân trên 65 tuổi, khoảng 30% trường hợp.</p>
                                    <p>Chóng mặt có thể do não không nhận đủ máu, bắt nguồn từ nhiều nguyên nhân sau:</p>
                                    <ul>
                                        <li><Link to="https://www.vinmec.com/vi/benh/xo-vua-dong-mach-3030/">Xơ vữa động mạch</Link></li>
                                        <li>Thiếu máu.</li>
                                        <li>Thiếu nước/mất nước.</li>
                                        <li>Tăng đường huyết</li>
                                        <li>Rối loạn nhịp tim</li>
                                        <li>Tụt huyết áp tư thế.</li>
                                        <li>Đột quỵ.</li>
                                        <li>Cơn thoáng thiếu máu não</li>
                                    </ul>
                                    <p>Chóng mặt có thể do não không nhận đủ máu.</p>
                                </div>
                                <div>
                                    <h5>4. Ngất xỉu và mất ý thức báo hiệu bệnh tim mạch</h5>
                                    <p>Ngất xỉu được lý giải là sự mất tạm thời hoặc đột ngột của ý thức. Đây cũng là triệu chứng khá phổ biến đối với hầu hết mọi người. Chúng ta thường nhận xét rằng, ngất xỉu là do tình trạng căng thẳng, hốt hoảng hoặc lo sợ, chỉ cần nghỉ ngơi, giữ bình tĩnh là hết. Tuy nhiên, đôi khi ngất xỉu lại là dấu hiệu của một bệnh tim mạch nguy hiểm, thậm chí đe dọa tính mạng. Đó là khi lượng máu đến não hoặc oxy trong máu bị giảm đột ngột, cơ thể phải phản ứng lại bằng cách “tắt bớt” hoạt động của các cơ quan. Vì vậy, khi thấy một người đột ngột ngất đi, thì ngay sau đó phải tìm ra nguyên nhân. Một số bệnh lý tim mạch khiến cho bệnh nhân có thể ngất xỉu, bao gồm: ngất do nhịp tim chậm, hội chứng nhịp nhanh - nhịp chậm, hạ huyết áp tư thế, hẹp van động mạch chủ, hẹp động mạch phổi,...</p>
                                    <p>Ngoài ra, còn có những nguyên nhân khác gây ra ngất, được tập hợp thành các nhóm: nhóm thần kinh, nhóm chuyển hóa, nhóm vận mạch. Tuy nhiên, chỉ có ngất do tim mạch có thể dẫn đến cái một chết đột ngột, không báo trước (đột tử).</p>
                                </div>
                                <div>
                                    <h5>5. Mệt mỏi và buồn ngủ vào ban ngày</h5>
                                    <p>Mệt mỏi và hay ngủ vào ban ngày là một trong những triệu chứng của bệnh tim mạch. Mệt mỏi có thể được xem là không thể tiếp tục hoạt động như ở mức của một người khỏe mạnh bình thường. Một trong những nguyên nhân tim mạch gây ra hiện tượng này là <b>suy tim</b></p>
                                    <p>Buồn ngủ vào ban ngày thường là do người bệnh bị rối loạn giấc ngủ vào ban đêm, chẳng hạn như ngưng thở khi ngủ, hoặc đơn thuần là mất ngủ. Tuy nhiên, điều đáng nói ở đây là tất cả các loại rối loạn giấc ngủ đều thường gặp hơn ở các bệnh nhân tim mạch</p>
                                </div>
                                <div>
                                    <h5>6. Bệnh tim mạch gây triệu chứng khó thở</h5>
                                <p>Suy tim và bệnh mạch vành là một trong những nguyên nhân nghiêm trọng gây ra dấu hiệu khó thở. Bệnh nhân suy tim thường khó thở khi gắng sức, nặng hơn có thể khó thở cả khi nằm nghỉ. Vào ban đêm, đôi khi bệnh nhân đang ngủ đột nhiên thức dậy rồi thở hổn hển, tình trạng này được gọi là “khó thở kịch phát về đêm”. Một số bệnh lý tim mạch khác, như các bệnh liên quan đến van tim, rối loạn nhịp tim, bệnh lý hô hấp, đều có thể gây ra khó thở</p>
                                <p>Ngay khi có những dấu hiệu trên, cần đi khám sớm để được chẩn đoán bệnh và điều trị kịp thời.</p>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div style={{height: 'calc(100vh - 425px'}}>
                            <Empty />
                        </div>
                    )
                }
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