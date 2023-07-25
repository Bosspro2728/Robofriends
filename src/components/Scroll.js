import React from 'react';

//we have learned props,state and now children
//to add css in jsx we use dubble {} and we replace - with camencase so in css overflow-y and in jsx styles overflowY 

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border:'1px solid black', height: '500px'}}>
			{props.children}
		</div>
	);
};


export default Scroll;