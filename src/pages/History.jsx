import { Timeline} from 'antd';
import moment from 'moment';
import { useState} from 'react';
import HistoryDayRight from '../components/HistoryDayRight';
import { Link }  from 'react-router-dom';
import {RightOutlined} from '@ant-design/icons'
import {history} from '../data'



export default function History() {
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))

    const handleChange = (e) => {
        setDate(e.target.value)
        const formatDate = moment(e.target.value).format('DD-MM-YYYY');
        console.log('Formatted date: ', formatDate)
        const a = document.createElement('a');
        a.href = '#' + formatDate;
        const body = document.querySelector('body');
        body.appendChild(a);
        a.click();
        a.remove();
    }

    const handleClick = (e) => {
        console.log('')
    }
  
    return (
        <div className="history">
            <h2 style={{marginBottom: '2px'}}>History</h2>
            <p style={{textAlign: 'center', marginTop: 0}}>Cùng xem lại nhật kí của bạn nào!</p>
            <div className="history-search">
                <label htmlFor="">Search: </label>
                <input type="date" value={date} onChange={handleChange}/>
            </div>
            <Timeline mode="left" pending={true} >
                <Timeline.Item onClick={handleClick} label={(<span id={moment().add(0, 'days').format('DD-MM-YYYY')} style={{fontWeight: 'bold', fontSize: '16px', padding: '5px 25px', background: 'rgb(212 240 255)'}}>{moment().add(0, 'days').format('DD-MM-YYYY')}</span>)}>
                    <HistoryDayRight item={history[moment().add(0, 'days').format('DD-MM-YYYY')]}/>
                </Timeline.Item>
                <Timeline.Item onClick={handleClick} label={(<span id={moment().add(-1, 'days').format('DD-MM-YYYY')} style={{fontWeight: 'bold', fontSize: '16px', padding: '5px 25px', background: 'rgb(212 240 255)'}}>{moment().add(-1, 'days').format('DD-MM-YYYY')}</span>)}>
                    <HistoryDayRight item={history[moment().add(-1, 'days').format('DD-MM-YYYY')]}/>
                </Timeline.Item>
                <Timeline.Item onClick={handleClick} label={(<span id={moment().add(-2, 'days').format('DD-MM-YYYY')} style={{fontWeight: 'bold', fontSize: '16px', padding: '5px 25px', background: 'rgb(212 240 255)'}}>{moment().add(-2, 'days').format('DD-MM-YYYY')}</span>)}>
                    <HistoryDayRight item={history[moment().add(-2, 'days').format('DD-MM-YYYY')]}/>
                </Timeline.Item>
                <Timeline.Item onClick={handleClick} label={(<span id={moment().add(-3, 'days').format('DD-MM-YYYY')} style={{fontWeight: 'bold', fontSize: '16px', padding: '5px 25px', background: 'rgb(212 240 255)'}}>{moment().add(-3, 'days').format('DD-MM-YYYY')}</span>)}>
                    <HistoryDayRight item={history[moment().add(-3, 'days').format('DD-MM-YYYY')]}/>
                </Timeline.Item>
                
            </Timeline>
            <Link to="/home/history-detail" style={{position: 'absolute', top: '40px', right: '3%', fontSize: '16px'}}>See detail <RightOutlined /></Link>
        </div>
    )
}