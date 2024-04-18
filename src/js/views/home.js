import React , {useContext} from "react";
import { Context } from "../store/appContext"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () =>{
	
	return(
		<div className="container">
			<div className="row">
				<div className="col text-center fs-1 fw-bold">
					Add a new contact
				</div>
			</div>
					<form >
						<div className="form-group mb-3">
							<label for="Full Name" className="fw-bold">Full Name</label>
							<input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" required/>
						</div>
						<div className="form-group mb-3">
							<label for="Email" className="fw-bold">Email</label>
							<input type="email" className="form-control" id="email" placeholder="Enter email" required/>
						</div>
						<div className="form-group mb-3">
							<label for="Phone" className="fw-bold">Phone</label>
							<input type="tel" className="form-control" id="phone" placeholder="Enter Phone" required/>
						</div>
						<div className="form-group mb-3">
							<label for="Address" className="fw-bold">Address</label>
							<input type="text" className="form-control" id="address" placeholder="Enter address" required/>
						</div>
						<button type="submit" className="btn btn-primary mt-3">Salvar contacto</button>
					</form>
				
			
		</div>
	);


} 
