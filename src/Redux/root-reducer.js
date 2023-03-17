import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import benchmarksReducer from "./benchmarks/benchmarks-reducer";
import menuReducer from "./menu/menu-reducer";
import userReducer from "./user/user-reducer";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  benchmarks: benchmarksReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
