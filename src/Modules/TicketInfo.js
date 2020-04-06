import React from "react";

const TicketInfo = () => {
	return 	<>
			<h4>Ticket info</h4>
			<hr />
			<div className="ticket_info_wrapper">
				<form>
					<div className="ticket_item">
						<label>Ticket number</label>
						<input></input>
						<div className="search_item">Search</div>
					</div>
					<div className="ticket_item">
						<label>Customer name</label>
						<input></input>
						<div className="search_item">Search</div>
					</div>
					<div className="ticket_item">
						<label>Time published</label>
						<input></input>
						<div className="search_item">Search</div>
					</div>
					<div className="submit_item">
						<input type="submit" value="Add Ticket"></input>
					</div>
				</form>
			</div>
		</>
};

export default TicketInfo;