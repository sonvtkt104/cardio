import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import user from '../images/user.jpeg';
import {
  HomeOutlined,
  FileSearchOutlined,
  OrderedListOutlined,
  CompassOutlined,
  HistoryOutlined,
  HeartOutlined
} from "@ant-design/icons";

export default function SideBar() {

  useEffect(() => {});
  return (
    // <div className="side-bar">
    <div className="side-bar-v2" style={{backgroundColor: "rgba(246, 246, 247, 1)"}}>
      <Menu
        style={{
          position: "fixed",
          width: 250,
          top: 0,
          left: 0,
          bottom: 0,
          borderRight: "2px solid rgb(246, 246, 247",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={'inline'}
      >
        <Link to=""><h1  style={{marginTop: '50px', textAlign: 'center', marginBottom: '50px', color: 'var(--color-blue)'}}>Cardio</h1></Link>
        <div style={{marginBottom: '30px', marginLeft: '30px', fontSize: '18px', color: 'gray'}}><span>Menu</span></div>
        <Menu.Item icon={<HomeOutlined />} key="1">
          <Link to=""><span>Home</span></Link>
        </Menu.Item>
        <Menu.Item icon={<FileSearchOutlined />} key="2">
          <Link to="today-diary"><span>Today's Diary</span></Link>
        </Menu.Item>
        <Menu.Item icon={<OrderedListOutlined />} key="3">
          <Link to="quick-test"><span>Quick Test</span></Link>
        </Menu.Item>
        <Menu.Item icon={<CompassOutlined />} key="6">
          <Link to="exercise"><span>Exercise</span></Link>
        </Menu.Item>
        <Menu.Item icon={<HistoryOutlined />} key="8">
          <Link to="history"><span>History</span></Link>
        </Menu.Item>
        <Menu.Item icon={<HeartOutlined />} key="9">
          <Link to="favorite"><span>Favorite</span></Link>
        </Menu.Item>
        <div className="side-bar-v2-bottom">
          <div><img src={user} alt="" /></div>
          <div>
            <p>Xuan Son</p>
            <p>xuanson@gmail.com</p>
          </div>
        </div>
      </Menu>
    </div>
  );
}
