import React from 'react';
import Form from '../components/form/'
import List from '../components/list/'

const AppContainer = ({handleSubmit, productList})=> (
	<div>
		<Form handleSubmit={handleSubmit} />
		<List productList={productList} />
	</div>
)


export default AppContainer