import type { EnvEnumType } from '@/config';
import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  envEnum: EnvEnumType;
}

const initialState: CommonState = {
  envEnum: '3',
};

const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setEnvEnum: (state, { payload }) => {
      state.envEnum = payload;
    },
  },
});
export const { setEnvEnum } = slice.actions;
export default slice;
