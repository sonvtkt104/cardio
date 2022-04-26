import { useParams } from "react-router-dom"
import {exerciseInit} from '../data'
import {LeftOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import { Empty } from "antd"

export default function DetailExercise () {
    const {exerciseKey} = useParams()
    const exercise = exerciseInit[exerciseKey];

    return (
        <div className="detail-exercise">
            <h3 style={{fontSize: '20px', }}>
                <Link to="/home/exercise"><LeftOutlined style={{marginRight: '5px'}}/></Link>
                {exercise.name} 
                <span style={{fontSize: '12px', position: 'relative', bottom: '10px', left: '10px'}} className={exerciseInit[exerciseKey].level === 'nhẹ nhàng' ? 'exercise-normal' : exerciseInit[exerciseKey].level === 'bình thường' ? 'exercise-medium' : 'exercise-hight'}>{exerciseInit[exerciseKey].level}</span>
            </h3>
            <p style={{marginLeft: '20px'}}>Thời lượng: <span>{exerciseInit[exerciseKey].time}</span> phút</p>
            <div className="detail-exercise-content">
                {
                    exercise.detail 
                    ? (<>
                       <div style={{width: '50%', margin: '10px auto 30px 20px'}}> <img style={{width: '100%'}}src={exercise.image} alt="" /></div>
                       <div style={{padding: '0 20px'}}>
                           <h3 style={{fontSize: '20px', fontWeight: 'bold'}}>Description:</h3>
                           <div>
                               <h4>Tư thế chuẩn bị:</h4>
                               <p>- Ngồi trên gót: từ đầu gối đến mũi chân thẳng, ngồi trên gót chân</p>
                               <p>- cột sống thẳng</p>
                               <p>- mắt hướng về phía trước, tay buông thõng</p>
                           </div>
                           <div>
                               <h4>Bước 1:</h4>
                               <p>- 2 tay từ từ đưa lên vuông góc với mặt đất -> thẳng lên trời, hít vào</p>
                               <p>- gập người về phía trước, trườn tay về phía trước, thở ra nhẹ nhàng (lưu ý: mông không nhô lên, mặt cúi thẳng người)</p>
                               <p>- ngẩng đầu lên, nâng người lên lưng vuông góc mặt đất, đưa 2 tay lên cao.</p>
                               <p>- lặp 1-2 lần</p>
                           </div>
                           <div>
                               <h4>Bước 2:</h4>
                               <p>- Đặt 2 tay sau đầu, lưng vuông góc vs mặt đất (hít vào)</p>
                               <p>- nghiêng phải, mắt nhìn theo khuỷu tay phải (thở ra)</p>
                               <p>- trở về tư thế ban đầu (hít vào)</p>
                               <p>- Nghiêng trái, mắt nhìn theo khuỷu tay phải (thở ra)</p>
                               <p>- trở về tư thế vuông góc</p>
                               <p>- lặp 1-2 lần</p>
                           </div>
                           <div>
                               <h4>Bước 3:</h4>
                               <p>- Giữ nguyên tay sau đầu (hít vào)</p>
                               <p>- vặn phải hết cỡ, cột sống thẳng, mắt nhìn theo tay (thở ra)</p>
                               <p>- trở về vị trí cũ</p>
                               <p>- lặp lại với bên trái</p>
                               <p>- trở về vị trí cũ</p>
                           </div>
                           <div>
                               <h4>Bước 4: </h4>
                               <p>- Đưa 2 tay về sau lưng, đan vào nhau,</p>
                               <p>- chậm rãi thẳng tay, ưỡn ngực (hít thở đều 1-2 nhịp)</p>
                               <p>- từ từ đưa 2 tay lên song song mặt đất, nghiêng đầu về phía trước (hít thở 1-2 nhịp)</p>
                               <p>- từ từ đưa tay xuống, buông tay đặt lên đùi</p>
                           </div>
                           <div>
                               <h4>Bước 5:</h4>
                               <p>- xoay 2 vai theo chiều kim đồng hồ và ngược lại </p>
                               <p>- lặp 2-3 vòng</p>
                           </div>
                       </div>
                        <div style={{textAlign: 'center'}}>
                            <p>-- Good luck --</p>
                        </div>
                    </> ) 
                    : (
                        <Empty description={'No description'}></Empty>
                    )
                }
            </div>
        </div>
    )
}