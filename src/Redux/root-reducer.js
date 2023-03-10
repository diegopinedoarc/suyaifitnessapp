import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import benchmarksReducer from "./benchmarks/benchmarks-reducer";
import menuReducer from "./menu/menu-reducer";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  benchmarks: benchmarksReducer,
});

export default persistReducer(persistConfig, rootReducer);
