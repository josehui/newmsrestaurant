import React from 'react';
import preloader from '../../../../assets/preloader.gif';

const PreloadView = () => {

	return(
		<div className="preloader">
 			<img className="preloader--gif" src={preloader} alt="Loader" />
		</div>
	);

}

export default PreloadView;
