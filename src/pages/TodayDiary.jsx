import moment from "moment";
import { EllipsisOutlined } from '@ant-design/icons'
import {DeleteOutlined, HeartOutlined, RetweetOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux"; 
import { changeSearchMeal, insertMeal } from '../redux/appSlice'
import {thucpham} from '../data'
import { Empty, Button} from 'antd';


export default function TodayDiary() {
    const dispatch = useDispatch();

    //modify meals
    const changeBreakFast = (day) => {
        dispatch(changeSearchMeal({type: 'Breakfast', day: day}));
        document.querySelector('.search-meal').classList.add('active');
        document.querySelector('.over-lay').classList.add('active');
    }
    const changeLunch = (day) => {
        dispatch(changeSearchMeal({type: 'Lunch', day: day}));
        document.querySelector('.search-meal').classList.add('active');
        document.querySelector('.over-lay').classList.add('active');
    }
    const changeDinner = (day) => {
        dispatch(changeSearchMeal({type: 'Dinner', day: day}));
        document.querySelector('.search-meal').classList.add('active');
        document.querySelector('.over-lay').classList.add('active');
    }
    const changeSnack = (day) => {
        dispatch(changeSearchMeal({type: 'Snack', day: day}));
        document.querySelector('.search-meal').classList.add('active');
        document.querySelector('.over-lay').classList.add('active');
    }

    
    const meals = useSelector(state => state.app.meals) 

    const handleInsertMeal = () => {
        dispatch(insertMeal())
    }

    return (
        <div className="today-diary">
            <h2>Today's Meal Planner</h2>
            <p style={{marginBottom: '25px'}}>Eat drink and be merry 🧐</p>
            <div className="today-diary-content" style={{ width : 'calc(100%)', display: "-webkit-box" , overflow: "scroll"}}>

                {meals?.map((meal, index) => {
                    return (
                        <div key={index} className="today-diary-item" style={{
                            width: '27%',
                        }}>
                            <div className="today-diary-item-header">
                                <span>{meal.day}</span>
                                <span><EllipsisOutlined /></span>
                            </div>
                            <div className="today-diary-item-content">
                                <div className="today-diary-item-breakfast">
                                    <h3>Breakfast</h3>
                                    <p><span>{meal.breakfast.length}</span> Meals</p>
                                    <div>
                                        {
                                            meal.breakfast?.map((item, i) => (
                                                <div key={i} className="meal-item">
                                                    <div style={{
                                                        backgroundImage : `url(${thucpham[item].image1})`
                                                    }}>
                                                        <DeleteOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '5px', bottom: '5px', position: 'absolute'}}/>
                                                        <HeartOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '35px', bottom: '5px', position: 'absolute'}}/>
                                                    </div>

                                                    <h4>{thucpham[item].name}</h4>
                                                </div>
                                            )) 
                                        }
                                    </div>
                                    <RetweetOutlined 
                                        onClick={e => {changeBreakFast(moment().add(index, 'days').format('DD-MM-YYYY'))}}
                                        style={{position: 'absolute', top:'32px', right: '20px', fontSize: '18px', cursor: 'pointer'}}
                                    />
                                </div>
                                <div className="today-diary-item-lunch">
                                    <h3>Lunch</h3>
                                    <p><span>{meal.lunch.length}</span> Meals</p>
                                    <div>
                                        {
                                            meal.lunch?.map((item, i) => (
                                                <div key={i} className="meal-item">
                                                    <div style={{
                                                        backgroundImage : `url(${thucpham[item].image1})`
                                                    }}>
                                                        <DeleteOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '5px', bottom: '5px', position: 'absolute'}}/>
                                                        <HeartOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '35px', bottom: '5px', position: 'absolute'}}/>
                                                    </div>

                                                    <h4>{thucpham[item].name}</h4>
                                                </div>
                                            )) 
                                        }
                                    </div>
                                    <RetweetOutlined 
                                        onClick={e => {changeLunch(moment().add(index, 'days').format('DD-MM-YYYY'))}}
                                        style={{position: 'absolute', top:'32px', right: '20px', fontSize: '18px', cursor: 'pointer'}}
                                    />
                                </div>
                                <div className="today-diary-item-dinner">
                                    <h3>Dinner</h3>
                                    <p><span>{meal.dinner.length}</span> Meals</p>
                                    <div>
                                        {
                                            meal.dinner?.map((item, i) => (
                                                <div key={i} className="meal-item">
                                                    <div style={{
                                                        backgroundImage : `url(${thucpham[item].image1})`
                                                    }}>
                                                        <DeleteOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '5px', bottom: '5px', position: 'absolute'}}/>
                                                        <HeartOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '35px', bottom: '5px', position: 'absolute'}}/>
                                                    </div>

                                                    <h4>{thucpham[item].name}</h4>
                                                </div>
                                            )) 
                                        }
                                    </div>
                                    <RetweetOutlined 
                                        onClick={e => {changeDinner(moment().add(index, 'days').format('DD-MM-YYYY'))}}
                                        style={{position: 'absolute', top:'32px', right: '20px', fontSize: '18px', cursor: 'pointer'}}
                                    />
                                </div>
                                <div className="today-diary-item-snack">
                                    <h3>Snack</h3>
                                    <p><span>{meal.snack.length}</span> Meals</p>
                                    <div>
                                        {
                                            meal.snack?.map((item, i) => (
                                                <div key={i} className="meal-item">
                                                    <div style={{
                                                        backgroundImage : `url(${thucpham[item].image1})`
                                                    }}>
                                                        <DeleteOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '5px', bottom: '5px', position: 'absolute'}}/>
                                                        <HeartOutlined style={{ backgroundColor : 'gray', opacity : '0.7', color : 'white', padding : '5px', cursor: 'pointer', borderRadius: '3px', right: '35px', bottom: '5px', position: 'absolute'}}/>
                                                    </div>

                                                    <h4>{thucpham[item].name}</h4>
                                                </div>
                                            )) 
                                        }
                                    </div>
                                    <RetweetOutlined 
                                        onClick={e => {changeSnack(moment().add(index, 'days').format('DD-MM-YYYY'))}}
                                        style={{position: 'absolute', top:'32px', right: '20px', fontSize: '18px', cursor: 'pointer'}}
                                    />
                                </div>
                                <div className="today-diary-item-water">
                                    <h3>Water</h3>
                                    <p><span>3</span> (l)</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="today-diary-item" style={{
                    width: '27%',
                }}>
                    <div className="today-diary-item-header">
                        <span>{moment().add(meals.length, 'days').format('DD-MM-YYYY')}</span>
                        <span><EllipsisOutlined /></span>
                    </div>
                    <div className="today-diary-item-content">
                        <Empty>
                            <Button onClick={handleInsertMeal} style={{ width: '60%'}} type="primary">Create Now</Button>
                        </Empty>
                    </div>
                </div>
            </div>
            <div className="search-favorite-meals">

            </div>
        </div>
    )
}