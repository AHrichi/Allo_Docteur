import React,{useState} from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useHistory } from "react-router";
import { postrec } from "../Redux/actions/rec";
const ReportForm = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const Current = useSelector(state => state.userReducer.result)
    const [recSt, setrecSt] = useState({client_name:Current?`${Current.name} ${Current.lastName}`:"",client_id:Current?Current._id:"",title:"",object:""})
     const handleChange=(e)=>{
        e.preventDefault()
         setrecSt({...recSt,[e.target.name]:e.target.value})
     }
    return (
    <div style={{display:"flex",flexDirection:"column",alignItems:'center',height:'700px',justifyContent:'center'}} >
      <div className="ui form" >
        <div className="field">
          <label>Title</label>
          <textarea name='title'  rows="2" onChange={handleChange} ></textarea>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea name='object' onChange={handleChange} ></textarea>
        </div>
        <button className="ui button" type="submit" onClick={()=>{dispatch(postrec(recSt));history.push('/dashboard')}}>Submit</button>
      </div>

    </div>
  );
};

export default ReportForm;
