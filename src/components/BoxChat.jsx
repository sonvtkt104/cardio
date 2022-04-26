import user from '../images/user.jpeg';
import {PhoneOutlined, VideoCameraOutlined, CloseOutlined,
    SmileOutlined, PlusCircleOutlined, SendOutlined
} from '@ant-design/icons' 
import { useDispatch , useSelector} from 'react-redux'
import {  closeBoxChat } from '../redux/appSlice'
import {useState} from 'react';


export default function BoxChat() {
    const [messageInput, setMessageInput] = useState('');
    const dispatch = useDispatch();

    const handleCloseBoxChat = () => {
        dispatch(closeBoxChat());
    }

    const name = useSelector(state => state.app.nameMessage)

    return (
        <div className="box-chat">
            <div className="box-chat-header">
                <div>
                    <img src={user} alt="" />
                    <p>{name}</p>
                </div>
                <ul>
                    <li><PhoneOutlined /></li>
                    <li><VideoCameraOutlined /></li>
                    <li onClick={handleCloseBoxChat}><CloseOutlined /></li>
                </ul>
            </div>
            <div className="box-chat-content">
                <div>
                    <p className="owner">hello</p>
                    <p>hi</p>
                    <p>How are you?</p>
                    <p className="owner">I'm fine, thanks. And you?</p>
                    <p>jhjghjvhv</p>
                    <p>haifafk hahfhal ialfldfbilai bl lafsla lab lafhla la laf  lahflhflafdhf</p>
                    <p>afaf</p>
                    <p>aff</p>
                    <p>afdf afdf</p>
                    <p className="owner">afsfdasfsdfaf</p>
                    <p>afdf af</p>
                    <p>af afdfadsf fca</p>
                </div>
            
            </div>
            <div className="box-chat-send">
                <input value={messageInput} onChange={e => setMessageInput(e.target.value)} type="text" placeholder="Compose your message..."/>
                <SmileOutlined style={{lineHeight: '40px', fontSize: '20px', marginRight: '15px', display:'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--color-blue)'}}/>
                {
                    messageInput !== '' 
                    ? <SendOutlined style={{lineHeight: '40px', fontSize: '20px', cursor: 'pointer',color: 'var(--color-blue)', display:'flex', flexDirection: 'column', justifyContent: 'center'}}/>
                    : <PlusCircleOutlined style={{lineHeight: '40px', fontSize: '20px', cursor: 'pointer' , display:'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--color-blue)'}}/>
                }
            </div>
        </div>
    )
}