import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default is localStorage
import { listFoodRecipeSlice } from "../reducer/reducers";

// Configure persist settings
const persistConfig = {
    key: "foodRecipe", // Key for storage
    storage,
    whitelist: ["categoryName", "recipeByCategory", "mealById", "recipeById"], // Fields to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, listFoodRecipeSlice.reducer);

// Configure the store with the persisted reducer
export const store = configureStore({
    reducer: {
        app: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore redux-persist actions
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

// Export the persistor
export const persistor = persistStore(store);
