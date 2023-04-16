import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user/user.reducer";
import blogReducer from "./blog/blog.reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat([logger]),
});

export default store;
