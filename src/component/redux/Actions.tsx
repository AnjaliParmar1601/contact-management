export const addData = (data:any) => {
    console.log("data",data)
    return {
      type: "ADD_DATA",
      payload:data
    };
  };
  export const deleteData = (data:any) => {
    console.log("data",data)
    return {
      type: "DELETE_DATA",
      payload:data
    };
  };
  export const editedDataredux = (data:any) => {
    console.log("data",data)
    return {
      type: "EDIT_DATA",
      payload:data
    };
  };