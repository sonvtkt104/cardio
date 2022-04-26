import {thucpham, exerciseInit} from '../data'

export default function HistoryDayRight({item}) {
    return (
        <div className="history-day-right">
            <div style={{flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'30px'}}>
                <div >
                    <h3>Breakfast</h3>
                    {
                        item.breakfast.map((e, i) => (
                            <div key={i}>- {thucpham[e].name}</div>
                        ))
                    }
                </div>
                <div>
                    <h3>Lunch</h3>
                    {
                        item.lunch.map((e, i) => (
                            <div key={i}>- {thucpham[e].name}</div>
                        ))
                    }
                </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <h3>Dinner</h3>
                    {
                        item.dinner.map((e, i) => (
                            <div key={i}>- {thucpham[e].name}</div>
                        ))
                    }
                </div>
                <div>
                    <h3>Snack</h3>
                    {
                        item.snack.map((e, i) => (
                            <div key={i}>- {thucpham[e].name}</div>
                        ))
                    }
                </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Exercise</h3>
                    {
                        item.exercise.map((e, i) => (
                            <div key={i}>- {exerciseInit[e].name}: <span>{exerciseInit[e].time}</span> phút</div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div>
                    <h3>Water: <span>{item.water[0]}</span> (lít)</h3>
                </div>
            </div>
        </div>
    )
}