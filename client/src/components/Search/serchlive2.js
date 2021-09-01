import React, { useEffect,useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getalldoctors } from '../../Redux/actions/user';


export default function ControllableStates(props) {
  console.log(props)
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState('');



  
  const options = props.data;
  
  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.textRegion(newValue)
         
          
        }}
        name={props.placeholder}
        
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
         
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 250 }}
        renderInput={(params) => <TextField {...params}  variant="outlined" />}
      />
    </div>
  );
}