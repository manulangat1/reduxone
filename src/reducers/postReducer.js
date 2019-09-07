import {FETCH_POSTS,NEWPOSTS} from '../actions/types'

const intialState = {
  items:[],
  item:{}
}
export default function(state=intialState,action){
  switch  (action.type){
    case FETCH_POSTS:
    console.log("reducer")
        return {
          ...state,
          items:action.payload
        }
    case NEWPOSTS:
         return{
           ...state,
           item:action.payload
         };
    default:
        return state;
  }
}
