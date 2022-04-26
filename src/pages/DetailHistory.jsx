import { Link } from "react-router-dom"
import {LeftOutlined, ClockCircleOutlined} from "@ant-design/icons"
import {thucpham, exerciseInit, history} from '../data'
import moment from "moment";
import {useState, useEffect} from 'react'
import {Empty} from 'antd'

export default function DetailHistory () {
    const [type, setType] = useState('breakfast')
    const [time, setTime] = useState(moment().format('DD-MM-YYYY'))
    const [list, setList] = useState([])

    useEffect(() => {
        switch(type) {
            case 'breakfast':
                if(history[time])
                    setList(history[time].breakfast)
                else setList([])
              break;
            case 'lunch':
                if(history[time])
                    setList(history[time].lunch)
                else setList([])
              break;
            case 'dinner':
                if(history[time])
                    setList(history[time].dinner)
                else setList([])
                break;
            case 'snack':
                if(history[time])
                    setList(history[time].snack)
                else setList([])
              break;
            case 'exercise':
                if(history[time])
                    setList(history[time].exercise)
                else setList([])
                break;
            default:
              // code block

              break;
        }
    }, [type, time])


  

    return (
        <div className="detail-history">
            <Link to="/home/history"><h3><LeftOutlined></LeftOutlined> Back</h3></Link>
            <h2 style={{marginBottom:'25px', position: 'relative'}}>History
                <div style={{position: 'absolute', top: '10px', right: '10px', fontSize: '15px'}}><input type="date" defaultValue={moment().format('YYYY-MM-DD')} onChange={e => setTime(moment(e.target.value).format('DD-MM-YYYY'))} /></div>
            </h2>
            <div className="detail-history-type">
                    <span onClick={e=> setType('breakfast')} className={type === 'breakfast' ? 'active' : ""}>Breakfast</span>
                    <span onClick={e => setType('lunch')} className={type === 'lunch' ? 'active': ''}>Lunch</span>
                    <span onClick={e=> setType('dinner')} className={type === 'dinner' ? 'active': ''}>Dinner</span>
                    <span onClick={e=>setType('snack')} className={type === 'snack' ? 'active': ''}>Snack</span>
                    <span onClick={e => setType('exercise')} className={type === 'exercise' ? 'active': ''}>Exercise</span>
                    <span onClick={e=> setType('water')} className={type === 'water' ? 'active': ''}>Water</span>
                </div>
            <div className="detail-history-content">
                {
                    type === 'exercise'
                    ? (<>
                    <div style={{marginTop:'0'}} className="list-exercise">
              {
                list.length !== 0 
                ? (list.map((item, index) => (
                    <div key={index} className="list-exercise-item">
                      <Link to={item}><img src={exerciseInit[item]?.image} alt="" /></Link>
                      <div>
                        <Link to={item}><h3>{exerciseInit[item]?.name}</h3></Link>
                        <div>
                          <span className={exerciseInit[item]?.level === 'nhẹ nhàng' ? 'exercise-normal' : exerciseInit[item]?.level === 'bình thường' ? 'exercise-medium' : 'exercise-hight'}>{exerciseInit[item]?.level}</span>
                          <span style={{marginRight: '15px'}}><ClockCircleOutlined /> {exerciseInit[item]?.time} phút</span>
                        </div>
                      </div>
                    </div>
                  )))
                  : (
                    <div style={{width: '100%'}}><Empty /></div>
                  )
              }
            </div>
                    </>)
                    : type === 'water'
                    ? (<>
                    <div style={{padding: '50px', textAlign: 'center', backgroundColor: 'white', border: '1px solid var(--color-border)', fontSize:'18px', fontWeight:'bold'}}>{history[time]?.water[0]} (l)</div>
                    </>)
                    : (<div className="favorite-list">
                    {
                        list.length !==0 
                        ? (list.map((item, index) => (
                            <div key={index} className="favorite-item">
                                <img src={thucpham[item]?.image2} alt="" />
                                <div>
                                    <h4>{thucpham[item]?.name}</h4>
                                    <p>Time: <span>11h 10p</span></p>
                                </div>
                                
                            </div>
                        )))
                        : (
                            <div style={{width: '100%'}}><Empty /></div>
                        )
                    }
                    </div>)
                    
                }
            </div>
        </div>
    )
}