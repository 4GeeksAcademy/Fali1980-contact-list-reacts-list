import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const deleteContact = (id) => {
		actions.deleteContact(id);
	};

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item "
							>
							<div className= "row row1">
								<div className= "col">
									<img src="https://i.pinimg.com/474x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg" alt="contact-photo" className="img-circle"></img>
								</div>
								<div className= "col mx-5 my-4">
									<div className= "row">
										<div className= "col">
											{item.name}
										</div>	
									</div>
								
									<div className= "row">
										<div className= "col">
											{item.address}
											
										</div>	
									</div>
									<div className= "row">
										<div className= "col">
											{item.phone}
										</div>	
									</div>
								
									<div className= "row">
										<div className= "col">
											{item.email}
										</div>	
									</div>
									{item.id}
								</div>
								<div className= "col justify-content-end p-3 mx-0">
								<button className="btn btn-success" onClick={()=>actions.editContact(item.id)}>
									Edit contact

								</button>
								<button className="btn btn-success" onClick={()=>actions.deleteContact(item.id)}>
									Delete

								</button>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Add Contact</button>
			</Link>
		</div>
	);
};
