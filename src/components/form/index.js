import React from 'react';

const Form = ({handleSubmite}) => (
	<div>
    <form onSubmit={handleSubmite}>
        <div className="ui action input">
            <input type="text" name="formSearch"/>
            <button className="ui button" >Search</button>
        </div>
    </form>
    </div> 
)

export default Form
