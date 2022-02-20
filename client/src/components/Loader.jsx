import React from "react";
import { Hearts } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Loader = () => {
	return (
		<div className="place-items-center">
			<Hearts color="red" height={100} width={100} arialLabel="Loading" />
		</div>
	);
};

export default Loader;
