import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import DisplayResult from "./ResultReducer"
import DisplayInput from "./InputReducer"
// import { displayResultValue } from "./ActionCreation";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            DisplayResult:DisplayResult,
            DisplayInput: DisplayInput
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
};