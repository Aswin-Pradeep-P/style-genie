/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
export const NAME = /^[A-Za-z0-9,'\-/.\\()\s]{3,50}$/;
export const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
export const ADDRESSNAME = /^[A-Za-z0-9,'\-/.\\()\s]{1,255}$/;
export const DISPLAY_NAME = /^[A-Za-z0-9,'\-/.\\()\s]{1,30}$/;
export const PINCODE = /^[1-9][0-9]{5}$/;
export const PHONE = /^(\+\d{1,3}[- ]?)?\d{10}$/;
export const ALLPASS = /.*/;
export const COUPON = /^[0-9A-Z-]+$/;
export const NUMBER_INPUT_REGEX = /^[0-9\b]+$/;
export const NON_NUMBER_INPUT_REGEX = /[^0-9]/;
