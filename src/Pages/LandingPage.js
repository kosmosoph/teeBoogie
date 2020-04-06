import React, {Component} from "react";
import ShiftInfo from "../Modules/ShiftInfo";
import TicketInfo from "../Modules/TicketInfo";
import SearchResults from "../Modules/SearchResults";
import Title from "../Modules/Title";

class LandingPage extends Component {
	render() {
		return (
			<div className="main">
				<div className="container">
					<ShiftInfo />
					
				</div>
				<div className="container">
					<TicketInfo />
				</div>
				<div className="container">
					<SearchResults />
				</div>
			</div>
		)
	}
}

export default LandingPage;