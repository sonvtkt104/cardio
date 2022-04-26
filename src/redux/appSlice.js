import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';
import { breakfasts, lunchs, dinners, snacks, favorite } from "../data";


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        boxChat: false,
        searchMeal: { 
            type: 'Breakfast',
            day:''
        },
        meals : [
             {
                day: moment().add(0, 'days').format('DD-MM-YYYY'),
                breakfast: breakfasts[0],
                lunch: lunchs[0],
                dinner: dinners[0],
                snack: snacks[0],
            },
            {
                day: moment().add(1, 'days').format('DD-MM-YYYY'),
                breakfast: breakfasts[1],
                lunch: lunchs[1],
                dinner:dinners[1],
                snack: snacks[1],
            },
            {
                day: moment().add(2, 'days').format('DD-MM-YYYY'),
                breakfast: breakfasts[2],
                lunch: lunchs[2],
                dinner: dinners[2],
                snack: snacks[2],
            },
            {
                day: moment().add(3, 'days').format('DD-MM-YYYY'),
                breakfast: breakfasts[3],
                lunch: lunchs[3],
                dinner: dinners[3],
                snack: snacks[3],
            },
             {
                day: moment().add(4, 'days').format('DD-MM-YYYY'),
                breakfast: breakfasts[4],
                lunch: lunchs[4],
                dinner: dinners[4],
                snack: snacks[4],
            },
            {
                day: moment().add(5, 'days').format('DD-MM-YYYY'),
                breakfast: breakfasts[5],
                lunch: lunchs[5],
                dinner: dinners[5],
                snack:snacks[5],
            },
        ],
        favorite: {
            breakfast: favorite.breakfast,
            lunch: favorite.lunch,
            dinner: favorite.dinner,
            snack: favorite.snack,
            exercise: favorite.exercise,
            article: favorite.article,
        },
        exercise: [],
        typeMessage: 'with-everyone',
        nameMessage: 'Xuan Son',
    }, 
    reducers: {
        toggleBoxChat: (state, action) => {
            state.boxChat = !state.boxChat
        },
        openBoxChat: (state, action) => {
            state.boxChat = true;
        },
        closeBoxChat: (state, action) => {
            state.boxChat = false;
        },
        changeSearchMeal: (state, action) => {
            state.searchMeal = action.payload;
        },
        changeMeal: (state, action) => {
            for(let i = 0; i < state.meals.length; i++) {
                if(state.meals[i].day === action.payload.day) {
                    switch(action.payload.type) {
                        case 'Breakfast':
                            state.meals[i].breakfast = action.payload.data;
                          break;
                        case 'Lunch':
                            state.meals[i].lunch = action.payload.data;
                          break;
                        case 'Dinner':
                            state.meals[i].dinner = action.payload.data;
                            break;
                        case 'Snack':
                            state.meals[i].snack = action.payload.data;
                          break;
                          
                        default:
                          // code block
                      }
                }
            }
        },
        insertMeal: (state, action) => {
            state.meals[state.meals.length] = {
                day: moment().add(state.meals.length, 'days').format('DD-MM-YYYY'),
                breakfast: [],
                lunch: [],
                dinner: [],
                snack:[],
            }
        },
        deleteFavorite: (state, action) => {
            switch(action.payload.type) {
                case 'breakfast':
                    state.favorite.breakfast = state.favorite.breakfast.filter(function(element){ 
                        return element !== action.payload.item; 
                    });
                  break;
                case 'lunch':
                    state.favorite.lunch = state.favorite.lunch.filter(function(element){ 
                        return element !== action.payload.item; 
                    });
                  break;
                case 'dinner':
                    state.favorite.dinner = state.favorite.dinner.filter(function(element){ 
                        return element !== action.payload.item; 
                    });
                    break;
                case 'snack':
                    state.favorite.snack = state.favorite.snack.filter(function(element){ 
                        return element !== action.payload.item; 
                    });
                  break;
                case 'exercise': 
                    state.favorite.exercise = state.favorite.exercise.filter(function(element){ 
                        return element !== action.payload.item; 
                    });
                    break;
                case 'article': 
                    state.favorite.article = state.favorite.article.filter(function(element){ 
                        return element !== action.payload.item; 
                    });
                    break;
                  
                default:
                  // code block
              }
        },
        insertExercise: (state, action) => {
            state.exercise.push(action.payload)
        },
        deleteExercise: (state, action) => {
            state.exercise = state.exercise.filter((element) => {
                return element.key !== action.payload.id
            })
        },
        changeTypeMessage: (state, action) => {
            state.typeMessage = action.payload.type;
        },
        changeNameMessage: (state, action) => {
            state.nameMessage = action.payload.name;
        }
    }
})

export const { toggleBoxChat, openBoxChat, closeBoxChat, changeSearchMeal, changeMeal, insertMeal, deleteFavorite,insertExercise,deleteExercise, changeTypeMessage, changeNameMessage} = appSlice.actions
export default appSlice.reducer