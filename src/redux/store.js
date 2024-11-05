import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import airdropAuthSlice from "./airdropAuthSlice";
 import youtubeAdminAuthSlice from "./youtubeAdminAuthSlice";
import adminAuthSlice from "../admin/auth/adminAuthSlice";

export const store = configureStore({
  reducer: {
    profile: counterReducer,
    airdrop: airdropAuthSlice,

    youtubeAdmin: youtubeAdminAuthSlice,

    admin: adminAuthSlice,

  },
});
