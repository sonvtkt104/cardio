import { Routes, Route } from 'react-router-dom'
import SearchMeal from './components/SearchMeal';
import AddFood from './pages/AddFood';
import Article from './pages/Article';
import Demo from './pages/Demo';
import Exercise from './pages/Exercise';
import Favorite from './pages/Favorite';
import History from './pages/History';
import Home from './pages/Home';
import Landing from './pages/Landing';
import DetailExercise from './pages/DetailExercise';
import QuickTest from './pages/QuickTest';
import SignUpIn from './pages/SignUpIn';
import TodayDiary from './pages/TodayDiary';
import DetailHistory from './pages/DetailHistory';
import Main from './pages/Main';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  const CloseSearchMeal = () => {
    document.querySelector('.over-lay').classList.remove('active');
    document.querySelector('.search-meal').classList.remove('active');
  }

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Landing></Landing>}></Route>
        <Route path="sign-up" element={<SignUpIn isSignUp={true} ></SignUpIn>} />
        <Route path="sign-in" element={<SignUpIn isSignUp={false} ></SignUpIn>} />
        <Route path="home" element={<Home></Home>}>
          <Route path="" element={<Main></Main>} ></Route>
          <Route path="add-food" element={<AddFood></AddFood>} ></Route>
          <Route path="quick-test" element={<QuickTest></QuickTest>} ></Route>
          <Route path="today-diary" element={<TodayDiary ></TodayDiary>} />
          <Route path="history-detail" element={<DetailHistory ></DetailHistory>} />
          <Route path="history" element={<History ></History>} />
          <Route path="exercise/:exerciseKey" element={<DetailExercise />} />
          <Route path="exercise" element={<Exercise ></Exercise>} />
          <Route path="favorite" element={<Favorite ></Favorite>} />
        </Route> 
        <Route path="articles/:articleKey" element={<ArticleDetail ></ArticleDetail>} />
        <Route path="articles" element={<Article ></Article>} />
        <Route path="demo" element={<Demo ></Demo>} />
      </Routes>
      <SearchMeal />
      <div onClick={CloseSearchMeal} className="over-lay"></div>
    </div>
  );
}

export default App;
