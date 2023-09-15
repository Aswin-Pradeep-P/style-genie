import { ROUTES } from '@Constants/routes';
import LocalStorage from '@Utils/storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
  prevPath: string;
  showLoginBottomSheet: boolean;
  showReferralBottomSheet: boolean;
}

const initialState = (): LoginState => {
  const referralBottomSheetVisiblity = JSON.parse(LocalStorage.getItem('showReferralBottomSheet') || 'false');

  return {
    prevPath: ROUTES.HOME,
    showLoginBottomSheet: false,
    showReferralBottomSheet: referralBottomSheetVisiblity
  };
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState(),
  reducers: {
    setPrevPath: (state, action: PayloadAction<string>) => {
      state.prevPath = action.payload;
    },
    setShowLoginBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.showLoginBottomSheet = action.payload;
    },
    setShowReferralBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.showReferralBottomSheet = action.payload;
      LocalStorage.setItem('showReferralBottomSheet', JSON.stringify(action.payload));
    }
  }
});

export const { setPrevPath, setShowLoginBottomSheet, setShowReferralBottomSheet } = LoginSlice.actions;

export default LoginSlice.reducer;
