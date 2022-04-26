import {thucpham} from '../data';
import {useState, useEffect} from 'react';
import {HeartOutlined, CloseOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../redux/appSlice'


export default function Favorite() {
    const dispatch = useDispatch();
    
    const [type, setType] = useState('breakfast');
    const [list, setList] = useState([]);
    
    const favorite = useSelector(state => state.app.favorite)

    useEffect(() => {
        switch(type) {
            case 'breakfast':
                setList(favorite.breakfast)
              break;
            case 'lunch':
                setList(favorite.lunch)
              break;
            case 'dinner':
                setList(favorite.dinner)
                break;
            case 'snack':
                setList(favorite.snack)
              break;
            case 'exercise':
                setList(favorite.exercise)
                break;
            case 'article': 
                setList(favorite.article)
                break;
              
            default:
              // code block
        }
    }, [type, favorite.breakfast, favorite.lunch, favorite.dinner, favorite.snack, favorite.exercise, favorite.article])

    const handleDelete = (item) => {
        dispatch(deleteFavorite({item : item, type: type}))
    }

    return (
        <div className="favorite">
            <p>YOUR</p>
            <h3>Favorite selections</h3>
            <p style={{margin: 0, lineHeight: ''}}>Hãy tạo bộ sưu tập theo yêu thích của riêng bạn!</p>
            <div className="favorite-type">
                <span onClick={e=> setType('breakfast')} className={type === 'breakfast' ? 'active' : ""}>Breakfast</span>
                <span onClick={e=> setType('lunch')}className={type === 'lunch' ? 'active' : ""}>Lunch</span>
                <span onClick={e=> setType('dinner')} className={type === 'dinner' ? 'active' : ""}>Dinner</span>
                <span onClick={e=> setType('snack')}className={type === 'snack' ? 'active' : ""}>Snack</span>
                <span onClick={e=> setType('exercise')}className={type === 'exercise' ? 'active' : ""}>Exercise</span>
                <span onClick={e=> setType('article')} className={type === 'article' ? 'active' : ""}>Article</span>
            </div>
            <div className="favorite-list">
                {
                    list.length !== 0 
                    ? list?.map((item, index) => (
                        <div key={index} className="favorite-item">
                            <img src={thucpham[item].image2} alt="" />
                            <div>
                                <h4>{thucpham[item].name}</h4>
                                <p>Time: <span>11h 10p</span></p>
                            </div>
                            
                            <HeartOutlined style={{position: 'absolute', top: '25px', left: '40px', backgroundColor: '#FFFFFF', padding: '7px', borderRadius: '50%'}}/>
                            <CloseOutlined onClick={e=> handleDelete(item)}  style={{position: 'absolute', top: '25px', right: '35px', cursor: 'pointer'}}/>
                        </div>
                    ))
                    : (
                        <div style={{display: 'flex', justifyContent: 'center', width: '100%',}}>
                            <Empty>
                            <Link to='/home/today-diary'><Button style={{marginBottom: '20px'}}type="primary">Thêm</Button></Link>
                                </Empty>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
}