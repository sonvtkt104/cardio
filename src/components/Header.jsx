import { 
    SettingOutlined,
    MessageOutlined,
    BellOutlined,
    SearchOutlined,
    UserOutlined
} from '@ant-design/icons'
import user from '../images/user.jpeg'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {everyone, us} from '../data'
import { openBoxChat, changeNameMessage, changeTypeMessage } from '../redux/appSlice'

export default function Header() {
    const [isMessage, setIsMessage] = useState(false);
    const type = useSelector(state => state.app.typeMessage);
    const [list, setList] = useState(everyone);

    useEffect(() => {
        switch(type) {
            case 'with-everyone':
              setList(everyone)
              break;
            case 'with-us':
              setList(us);
              break;
            default:
              // code block
              break;
          }
    }, [type])
    
    const dispatch = useDispatch();

    const handleToggleMessage = () => {
        setIsMessage(pre => !pre);
    }

    const handleOpenBoxChat = (item) => {
        dispatch(changeNameMessage({name: item}))

        dispatch(openBoxChat());
        
        setIsMessage(false);
    }

    return (
        <div className="header">
            <div className="header-search">
                <SearchOutlined style={{position: 'absolute', left: '10px', fontSize: '16px',  top: '15px'}}/>
                <input type="text" placeholder="Search"/>
            </div>
            <ul>
                <li><span><BellOutlined style={{marginRight: '5px', fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)'}} />News</span></li>
                <li><span><SettingOutlined style={{marginRight: '3px', fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)'}} /> Settings</span></li> 
                <li><span style={{cursor: 'pointer'}} onClick={handleToggleMessage}><MessageOutlined style={{marginRight: '5px', fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)'}} />
                        Messages
                    </span>
                    <div className={isMessage ? "message active" : "message"}>
                        <div>
                            <p onClick={e => dispatch(changeTypeMessage({type: 'with-everyone'}))} className={type === 'with-everyone' ? "active" : ""}>With everyone</p>
                            <p onClick={e => dispatch(changeTypeMessage({type: 'with-us'}))} className={type === 'with-us' ? "active" : ""}>With us</p>
                        </div>
                        <span>
                            <SearchOutlined style={{position: 'absolute', left: '10px', fontSize: '16px',  top: '10px'}}/>
                            <input type="text" placeholder='search...'/>
                        </span>
                        <ul>
                            {
                               list?.map((item, index) =>(
                                <li key={index} onClick={e=>handleOpenBoxChat(item)}>
                            <div><img src={user} alt="" /></div>
                            <div>
                                <h3>{item}</h3>
                                <p>message now</p>
                            </div>
                        </li>
                            ))
                            }
                            
                            
                        </ul>
                    </div>
                </li>
                
                <li>
                    <span style={{cursor: 'pointer'}}>
                        <UserOutlined style={{marginRight: '5px', fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)'}} />
                        User
                        <ul>
                            <li></li>
                        </ul>
                    </span>
                </li>
            </ul>
        </div>
    )
}