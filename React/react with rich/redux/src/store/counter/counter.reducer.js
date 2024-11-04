import { INCREMENT, DECREMENT  } from './counter.types';

const initialState =  {
  value: 0,
  loading: false
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value += 1, loading: true }
    case DECREMENT: {
      if(state.value > 0) {
        return { ...state, value: state.value -= 1 }
      } else {
        return state;
      }
    }
    default:
      return state
    
  }
}

export default counterReducer