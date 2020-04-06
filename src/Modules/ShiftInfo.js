import React from "react";
import VODateFormat from "../Components/ObjectValue/VODateFormat";

const ShiftInfo = () => {
	const getTimeStamp = new Date().getFullYear().toLocaleString();
	// debugger;
    return (
			<>
			<div className="main_title_info_wrapper">
					<div className="title_wrapper">
						<h4>Shift info</h4>
					</div>
					<div className="title_info_wrapper">
						<h1>teeBoogie</h1>
						<h5>tickets logger v1.0</h5>
					</div>
				</div>
				<hr />
				<div className="shift_info_wrapper">
					<div className="shift">morning [day] late</div>
					<div className="day_date">Friday, 03.04.2020</div>
				</div>
			</>
    );
};

export default ShiftInfo;