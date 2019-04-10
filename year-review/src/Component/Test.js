import React from 'react';

const test = (props) => {
	console.log(props)
	return <h1>{props.match.path}</h1>
}

export default test