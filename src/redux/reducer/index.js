import {combineReducers} from "redux";
import oanTuXiReducer from "./oantuxi";
import BaitapVeReducer from "./bookingticket";

const rootReducer = combineReducers({
    oanTuXiReducer,
    BaitapVeReducer
})
export default rootReducer;