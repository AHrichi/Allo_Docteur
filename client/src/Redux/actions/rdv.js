import { APPROVED, DELETE_RDV, FAIL_ALL_RDV, FAIL_DELETE_RDV, GET_ALL_RDV, NOT_APPROVED, POST_RDV } from "../Const/rdv"
import axios from 'axios'
export const postrdv=(rdv)=>async(dispatch)=>{
    dispatch({type:POST_RDV})
    try {
        let result=await axios.post("/api/rdv/postrdv",rdv)
    } catch (error) {
        console.log(error)
    }
}

export const getallrdv=()=>async(dispatch)=>{
    
    try {
        let result =await axios.get('/api/rdv/')
        dispatch({type:GET_ALL_RDV,payload:result.data.result})
    } catch (error) {
        dispatch({type:FAIL_ALL_RDV})
    }
}

export const deleterdv=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_RDV})
        axios.delete(`/api/rdv/delete/${id}`)
        dispatch(getallrdv())
    } catch (error) {
        dispatch({type:FAIL_DELETE_RDV})
    }
}

export const editrdv=(id,rdv)=>async(dispatch)=>{
    try {
        let result=await axios.put(`/api/rdv/update/${id}`,rdv)
        dispatch({type:APPROVED})
        dispatch(getallrdv())
    } catch (error) {
        dispatch({type:NOT_APPROVED})
    }
}
