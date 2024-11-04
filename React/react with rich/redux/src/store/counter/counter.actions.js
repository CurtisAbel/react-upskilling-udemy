import { INCREMENT, DECREMENT  } from './counter.types';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });