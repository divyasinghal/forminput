import React,{useState} from 'react';
import './GetInputForm.css';

const GetInputForm=()=>{
    const [valid,setValid]=useState(true);

    const inputHandler =(Event)=>{
        console.log(Event.target.value);
        const entText = Event.target.value;
        if (entText.trim().length>11)
        {
            console.log('Error');
            setValid(false);
            return;
        }
        setValid(true);
    }
    return(
        <div className="form-control">
            <form>                
                <label> Enter a word of less than 11 characters</label>
                <input type="text" id="dummytext" onChange={inputHandler}/>
                <br></br>
                {!valid && <label style={{color:'red'}}>Text should be less than 11 characters.</label>}
            </form>
        </div>
    )
}

export default GetInputForm;