import React from 'react';

const Form = ({handleSubmit}) => (
	<div>
    <form onSubmit={handleSubmit}>
        <div className="ui action input">
            <input type="text" name="formSearch"/>
            <button className="ui button" >Search</button>
        </div>
    </form>
    </div> 
)

export default Form
