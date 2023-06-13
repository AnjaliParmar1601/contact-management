
const initialState = {
    data: [] as ReadonlyArray<any>,
  };

export type counterReducer = Readonly<typeof initialState>;

const crudReducer = (state: counterReducer = initialState, action:any) => {
    console.log("action",state)
    switch (action.type) {
    
        case "ADD_DATA":
        return {...state,data:[...state.data,action.payload]}
        case "DELETE_DATA":
            return {...state,data:action.payload}
            case"EDIT_DATA":
            return{...state,data:action.payload}
      default:
        return initialState;
    }
  };
  export default crudReducer;