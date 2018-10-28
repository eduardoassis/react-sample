import React from 'react';
import Form from '../components/form/'
import List from '../components/list/'

const AppContainer = ({handleSubmit})=> (
	<div>
		<Form handleSubmit={handleSubmit} />
		<List />
	</div>
)


export default AppContainer