import { SearchOutlined, PlusCircleOutlined, CloseOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { List } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { changeMeal } from '../redux/appSlice';
import { breakfasts, lunchs, dinners, snacks, thucpham, favorite } from '../data'
import { useEffect, useState} from 'react'


export default function SearchMeal() {
    const typeSearch = useSelector(state => state.app.searchMeal.type)
    const day = useSelector(state => state.app.searchMeal.day)

    const [type, setType] = useState('hint');
    const [yourMeal, setYourMeal] = useState([])

    const dispatch = useDispatch();

    const [lists, setList] = useState([]);
    const [listFavorite, setListFavorite] = useState([]);

    useEffect(() => {
        switch(type) {
            case 'hint':
                switch(typeSearch) {
                    case 'Breakfast':
                        setList(breakfasts)
                      break;
                    case 'Lunch':
                        setList(lunchs)
                      break;
                    case 'Dinner':
                        setList(dinners)
                        break;
                    case 'Snack':
                        setList(snacks)
                      break;
                      
                    default:
                      // code block
                }
              break;
            case 'favorite':
                switch(typeSearch) {
                    case 'Breakfast':
                        setListFavorite(favorite.breakfast)
                      break;
                    case 'Lunch':
                        setListFavorite(favorite.lunch)
                      break;
                    case 'Dinner':
                        setListFavorite(favorite.dinner)
                        break;
                    case 'Snack':
                        setListFavorite(favorite.snack)
                      break;
                      
                    default:
                      // code block
                }
              break;
              
            default:
              // code block
          }
    }, [type, typeSearch])

    const closeSearchMeal = () => {
        document.querySelector('.over-lay').classList.remove('active');
        document.querySelector('.search-meal').classList.remove('active');
    }

    const handleChange = (list) => {
        dispatch(changeMeal({day: day, type: typeSearch, data: list}))
        setYourMeal([])
        document.querySelector('.over-lay').classList.remove('active');
        document.querySelector('.search-meal').classList.remove('active');
    }

    const deleteItemYourMeal = (item) => {
        const l = yourMeal.filter(element => {
            return element !== item;
        })
        setYourMeal(l);
    }

    return (
        <div className="search-meal">
            <h3>Search: <span>{typeSearch}</span> Plan</h3>
            <p style={{marginBottom: '20px'}}>Cho ngày {day}</p>
            <div className="search-meal-search">
                <input type="text" placeholder="Search..." style={{textAlign: 'left', paddingLeft: '30px'}}/>
                <SearchOutlined style={{position: 'absolute', top: '3px', left: '3px', fontSize: '18px'}}/>
            </div>
            <div style={{marginBottom: '30px'}}>
                <span onClick={e => setType('hint')} className={type === 'hint' ? 'active' : ""} style={{marginRight: '35px', padding: '10px', cursor: 'pointer'}}>Gợi ý</span>
                <span onClick={e => setType('favorite')} className={type === 'favorite' ? 'active' : ""} style={{marginRight: '35px', padding: '10px', cursor: 'pointer'}}>Favorite</span>
            </div>
            {
                type === 'hint'
                ? (
                    <div style={{overflowY: 'scroll', height: '65vh'}}>
                        {
                            lists?.map((list, index) => (
                                <div key={index} className="search-meal-plan">
                                    <h4>Plan <span>{index + 1}</span>:</h4>
                                    <List
                                    itemLayout="horizontal"
                                    dataSource={list}
                                    renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            description={(
                                            <div style={{ display: 'flex'}}>
                                                <div style={{ flexBasis: '10%', marginRight: '10px'}}>
                                                    <img src={thucpham[item].image2} alt="" style={{width: '100%'}} />  
                                                </div>
                                                <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}><p style={{margin: 0}}>{thucpham[item].name}</p></div>
                                            </div>)}
                                        />
                                    </List.Item>
                                        )}
                                    />
                                    <PlusCircleOutlined onClick={e => handleChange(list)} style={{position: 'absolute', top: '5px', right: '10px', fontSize: '16px', color: 'var(--color-blue)', cursor: 'pointer'}} />
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <>
                        <div>
                            <h3 style={{position: 'relative'}}>Your meal {yourMeal.length !== 0 ? (<PlusCircleOutlined onClick={e=>handleChange(yourMeal)} style={{position: 'absolute', top: '5px', right: '10px', fontSize: '16px', color: 'var(--color-blue)', cursor: 'pointer'}}/>) : ""}</h3>
                            {
                                yourMeal.length === 0 ? (<p style={{color: 'gray'}}>No data</p>) : (
                                    <div style={{overflowY: 'scroll', height: '25vh', padding: '10px', marginBottom: '15px'}}>
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={yourMeal}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        description={(
                                                        <div style={{ display: 'flex', position: 'relative' }}>
                                                            <div style={{ flexBasis: '10%', marginRight: '10px'}}>
                                                                <img src={thucpham[item].image2} alt="" style={{width: '100%'}} />  
                                                            </div>
                                                            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}><p style={{margin: 0}}>{thucpham[item].name}</p></div>
                                                            <MinusCircleOutlined onClick={e => deleteItemYourMeal(item)} style={{position: 'absolute', top: '5px', right: '10px', fontSize: '16px', color: 'var(--color-yellow)', cursor: 'pointer'}} />
                                                        </div>)}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                )
                            }
                            <h3>List</h3>
                            {
                                <div style={{overflowY: 'scroll', height: '30vh', padding: '10px'}}>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={listFavorite}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    description={(
                                                    <div style={{ display: 'flex', position: 'relative' }}>
                                                        <div style={{ flexBasis: '10%', marginRight: '10px'}}>
                                                            <img src={thucpham[item].image2} alt="" style={{width: '100%'}} />  
                                                        </div>
                                                        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}><p style={{margin: 0}}>{thucpham[item].name}</p></div>
                                                        <PlusCircleOutlined onClick={e => setYourMeal([...yourMeal, item])} style={{position: 'absolute', top: '5px', right: '10px', fontSize: '16px', color: 'var(--color-blue)', cursor: 'pointer'}} />
                                                    </div>)}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            }

                        </div>
                    </>
                )
            }
            <CloseOutlined onClick={closeSearchMeal} style={{position: 'absolute', top: '20px', right: '20px', fontSize: '18px', cursor: 'pointer'}}/>
        </div>
    )
}