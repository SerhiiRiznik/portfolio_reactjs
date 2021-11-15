const initialState = {
  count: 1
}

export function appReducer(state = initialState, action:any) {
  switch (action.type) {
    case 'SET_COUNT': {
      return {
         ...state,
         count : action.payload
      }
    }
    
    
    default:
      return state
  }
}



function setCount(number:number) {
   return {
      type : 'SET_COUNT',
      payload : number
   }
}

