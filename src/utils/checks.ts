import { Tokens } from '@Constants/common';
import LocalStorage from './storage';

export const isArray = (obj: any): boolean => Boolean(isObject(obj) && obj instanceof Array);

export const isEmptyArray = (obj: any): boolean => Boolean(isArray(obj) && obj.length === 0);

export const isNonEmptyArray = (arr: any) => Array.isArray(arr) && arr.length > 0;

export const isObject = (obj: any): boolean => Boolean(obj && typeof obj === 'object');

export const isNonEmptyObject = (obj: any) => obj && Object.keys(obj).length > 0;

export const isEmptyObject = (obj: any) => obj && Object.keys(obj).length === 0;

export const isNonEmptySet = (set: any) => set && set.size > 0;

export const isBoolean = (val: any): boolean => typeof val === 'boolean';

export const isNonEmptyString = (str: any) => typeof str === 'string' && str?.trim().length > 0;

export const isEmptyString = (str: any): boolean => Boolean(typeof str === 'string' && str.length === 0);

export const getNonEmptyString = (data: any): string => {
  if (isNonEmptyString(data)) return data;

  return '';
};

export const isUndefinedOrNull = (value: any) => {
  if (value == null) return true;

  return false;
};

export const hasAuthToken = () => LocalStorage.getItem(Tokens.ACCESS_TOKEN);
