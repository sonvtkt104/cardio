import { Outlet } from 'react-router-dom';
import BoxChat from '../components/BoxChat';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { useSelector } from 'react-redux'


export default function Home() {
  

    const boxChat = useSelector(state => state.app.boxChat);

    return(
        <div className="home">
            <SideBar></SideBar>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            {
                boxChat ? <BoxChat></BoxChat> : ""
            }
          
        </div>
    )
}