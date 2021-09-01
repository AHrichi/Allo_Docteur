import {
  CURRENT_USER,
  EDIT_PROFILE,
  FAIL_CLIENT,
  FAIL_DOCTOR,
  FAIL_USER,
  GETALLDOCTORS,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOG_OUT_CHAT,
  REGISTER_USER,
  GETALLClients,
  DELETE,
  DELETE_FAIL
} from "../Const/user";
import axios from "axios";
export const registerUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/register", user);

    // localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_USER, payload: result.data });
    history.push("/dashboard");
  } catch (error) {
    const { errors,msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    // dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const loginUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    history.push("/dashboard");
  } catch (error) {
      
    const { errors,msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    if(msg){alert(msg)}
    // dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  try {
    let result = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data.user });
    console.log(result.data.user,localStorage.getItem("token"))
  } catch (error) {
    dispatch({ type: FAIL_USER, options });
    console.log(error,options)
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

export const getalldoctors=()=>async(dispatch)=>{
  try {
    let result =await axios.get("/api/user/alldoctors")
    dispatch({type:GETALLDOCTORS,payload:result.data.result})
    
  } catch (error) {
    dispatch({type:FAIL_DOCTOR})
  }
}

export const getallclients=()=>async(dispatch)=>{
  try {
    let result =await axios.get("/api/user/allclients")
    dispatch({type:GETALLClients,payload:result.data.result})
    
  } catch (error) {
    dispatch({type:FAIL_CLIENT})
  }
}




// export const filterdata=()=>async(dispatch)=>{
//   try {
    
//     await dispatch({type:GETALLDOCTORS,payload:{}})
//   } catch (error) {
    
//   }
// }
export const editprofile=(id,user)=>async(dispatch)=>{
  
  try {
   let result= await axios.put(`/api/user/update/${id}`,user)
   dispatch({type:EDIT_PROFILE})
  } catch (error) {
    console.log(error)
  }
}




export const logOutChat = () => async (dispatch) => {
  dispatch({ type: LOG_OUT_CHAT });
};


export const deleteuser=(id)=>async(dispatch)=>{
  try {
    dispatch({type:DELETE})
    let result =await axios.delete(`/api/user/delete/${id}`)
    dispatch(getalldoctors())
    dispatch(getallclients())
  } catch (error) {
    dispatch({type:DELETE_FAIL})
  }
}
