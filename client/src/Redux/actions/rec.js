import axios from "axios";
import { DELETE_REC, FAIL_DELETE_REC, FAIL_GET_REC, FAIL_POST_REC, GET_REC, POST_REC } from "../Const/rec";
export const postrec = (rec) => async (dispatch) => {
  dispatch({ type: POST_REC });
  try {
    let result = await axios.post("/api/rec/postrec", rec);
  } catch (error) {
    dispatch({ type: FAIL_POST_REC });
  }
};


export const getallrec=()=>async(dispatch)=>{
    
    try {
        let result =await axios.get('/api/rec/getallrec')
        dispatch({type:GET_REC,payload:result.data.result})
    } catch (error) {
        dispatch({type:FAIL_GET_REC})
    }
}

export const deleterec=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_REC})
        axios.delete(`/api/rec/deleterec/${id}`)
        dispatch(getallrec())
    } catch (error) {
        dispatch({type:FAIL_DELETE_REC})
    }
}