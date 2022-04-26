import egif from '../images/egif.gif'
import { Select, Button, InputNumber, Table, Popconfirm, Empty } from 'antd';
import { ClockCircleOutlined } from "@ant-design/icons"
import {useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {insertExercise, deleteExercise} from '../redux/appSlice'
import { exerciseInit, exerciseList } from '../data'
import { Link } from 'react-router-dom';

const { Option } = Select;
const { Column } = Table;


export default function Exercise() {

  const dispatch = useDispatch();

  const [type, setType] = useState('today-exercise')
  const recentExercise = useSelector(state => state.app.exercise)

  const [exercise, setExercise] = useState('');
  const [level ,setLevel] = useState('');
  const [time, setTime] = useState();

  const handleDelete = (key) => {
    dispatch(deleteExercise({id: key}))
  }

  const onChangeExercise = (value) => {
    switch (value) {
      case 'Đi bộ':
        setExercise('Đi bộ');
        return;

      case 'Yoga':
        setExercise('Yoga');
        return;

      case 'Đạp xe':
        setExercise('Đạp xe');
        return;
      case 'Chạy bộ':
        setExercise('Chạy bộ');
        return;
      case 'Bơi':
        setExercise('Bơi');
        return;
      case 'Thể dục nhịp diệu':
        setExercise('Thể dục nhịp điệu');
        return;
      default: 
        return;
    }
  };

  const onChangeLevel = (value) => {
    switch (value) {
      case 'Nhẹ nhàng':
        setLevel('Nhẹ nhàng')
        return;

      case 'Bình thường':
        setLevel('Bình thường');
        return;

      case 'Nâng cao':
        setLevel('Nâng cao');
        return;
      
      default: 
        return;
    }
  }

  const onChangeTime = (value) => {
    setTime(value);
  }

  const handleAdd = () => {
    const item = {
      key: recentExercise.length,
       exercise: exercise,
       level: level,
       time: time
    }
    dispatch(insertExercise(item))
    setExercise('')
    setLevel('')
    setTime(0)
  }

  console.log(exercise)
  return (
    <div className="exercise">
        <div>
            <h2>Exercise</h2>
            <p>No pain, no gain! <img style={{ width: '35px' }} src={egif} alt="" /></p>
        </div>
        <div className="exercise-type">
          <span onClick={e=> setType('today-exercise')} className={type === 'today-exercise' ? 'active' : ''}>Today's exercise</span>
          <span onClick={e=> setType('list-exercise')} className={type === 'list-exercise' ? 'active' : ''}>Exercise List</span>
        </div>
        {
          type === 'today-exercise'
          ? (
            <>
              <div className="exercise-add">
                  <span>Exercise: </span>
                  <Select 
                    name='select1'
                    onChange={onChangeExercise}
                       style={{flexBasis: '20%'}}
                      showSearch
                      value={exercise}
                      placeholder="Please select a exercise"
                  >
                    <Option value="Yoga">Yoga</Option>
                    <Option value="Đi bộ">Đi bộ</Option>
                    <Option value="Đạp xe">Đạp xe</Option>
                    <Option value="Chạy bộ">Chạy bộ</Option>
                    <Option value="Bơi">Bơi</Option>
                    <Option value="Thể dục nhịp diệu">Thể dục nhịp điệu</Option>
                  </Select>
                  <span>Level:</span>
                  <Select 
                    name="select2"
                    value={level}
                    onChange={onChangeLevel}
                      style={{flexBasis: '20%'}}
                      placeholder="Please select a level"
                  >
                    <Option value="Nhẹ nhàng">Nhẹ nhàng</Option>
                    <Option value="Bình thường">Bình thường</Option>
                    <Option value="Nâng cao">Nâng cao</Option>
                  </Select>
                  <span>Time: </span>
                  <InputNumber
                  value={time}
                    min="0"
                    onChange={onChangeTime}
                      addonAfter="phút"
                      style={{flexBasis: '15%'}}
                      prefix={<ClockCircleOutlined />}
                  /> 
                  <Button onClick={handleAdd} style={{flexBasis: '10%'}} type="primary">Add exercise</Button>
              </div>
              <div className="exercise-recent">
                  <h3 style={{fontSize: '18px', marginBottom: '30px'}}>Recent exercise</h3>
                  {
                    recentExercise.length !== 0 
                    ? (<>
                      <Table dataSource={recentExercise}>
                        <Column title="Exercise" dataIndex="exercise" key="exercise" />
                        <Column title="Level" dataIndex="level" key="level" />
                        <Column title="Time (phút)" dataIndex="time" key="time" />

                        <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Popconfirm style={{width: '30%'}} title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                                <a href='/'>Delete</a>
                            </Popconfirm>
                        )}
                        />
                      </Table>
                    </>)
                    : (<>
                    <div>
                      <Empty />
                    </div>
                    </>)
                  }
              </div>
            </>
          )
          : (<>
            <div className="list-exercise">
              {
                exerciseList.map((item, index) => (
                  <div key={index} className="list-exercise-item">
                    <Link to={item}><img src={exerciseInit[item].image} alt="" /></Link>
                    <div>
                      <Link to={item}><h3>{exerciseInit[item].name}</h3></Link>
                      <div>
                        <span className={exerciseInit[item].level === 'nhẹ nhàng' ? 'exercise-normal' : exerciseInit[item].level === 'bình thường' ? 'exercise-medium' : 'exercise-hight'}>{exerciseInit[item].level}</span>
                        <span style={{marginRight: '15px'}}><ClockCircleOutlined /> {exerciseInit[item].time} phút</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </>)
        }
    </div>
  )
}