import React from 'react';
import { useMouseCoordinates } from '../../hooks/useMouseCoordinate';

const OtherComponent = () => {
	const mouseCoordinate = useMouseCoordinates();
	return (
		<div style={{height: '150px', width: '150px', backgroundColor: mouseCoordinate.x > 500 ? 'brown' : 'red'}}>
			x:{mouseCoordinate.x}
			<br />
			y:{mouseCoordinate.y}
		</div>
	)
}

export default OtherComponent
