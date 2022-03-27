import propTypes from "prop-types";
import React from "react";

//create your first component
const Home = (props) => {
	const hundredsDigit = Math.floor((props.seconds / 100) % 10);
	const tensDigit = Math.floor((props.seconds / 10) % 10);
	const singleDigit = Math.floor((props.seconds / 1) % 10);

	return (
		<div className="container">
			<div className="d-flex flex-row-reverse bd-highlight mt-3 justify-content-center align-items-center">
				<div className="border border-dark border-5 mx-3 h-100">
					{singleDigit}
				</div>
				<div className="border border-dark border-5 mx-3 h-100">
					{tensDigit}
				</div>
				<div className="border border-dark border-5 mx-3 h-100">
					{hundredsDigit}
				</div>
			</div>
		</div>
	);
};

export default Home;
