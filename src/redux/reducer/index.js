import {combineReducers} from "redux";
import oanTuXiReducer from "./oantuxi";
import BaitapVeReducer from "./bookingticket";
import ToDoListReducer from "./ToDoListReducer";



const rootReducer = combineReducers({
   ToDoListReducer,
})
export default rootReducer;