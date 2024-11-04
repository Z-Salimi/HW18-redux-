import { configureStore } from '@reduxjs/toolkit'
import { CartReducer } from './features/cart.slice';
import { ProductReducer } from './features/product.slice';

export const store = configureStore({
  reducer: {
    product:ProductReducer,
    cart: CartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;