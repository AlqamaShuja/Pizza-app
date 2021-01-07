import React from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
    const navigateToHome = useNavigate();
    const form = () => {
        return(
            <form className="mr-4 ml-4">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputHome">Home Address</label>
                    <input type="text" className="form-control" id="exampleInputHome" placeholder="Home Address"/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your address with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label for="exampleInputPhone">Phone Number</label>
                    <input type="number" className="form-control" id="exampleInputPhone" placeholder="Enter Phone Number"/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your Phone Number with anyone else.</small> */}
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Fast Delivery</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => {
                    navigateToHome('/');
                }}>Submit</button>
            </form>
        );
    }
    return ( 
        <div>
            <h1 style={{ textAlign: 'center'}} className="text-muted"> For More Details Contact: 03442898530 </h1>
            {form()}
        </div>
     );
}
 
export default ContactUs;