import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact">
       <div className="container">
        <br /><br /><br /><h2>Contact Us</h2><br /><br />
            <form action="#">
                <div className="form-group">
                <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" name="fullName" />
                </div>
                <div className="form-group">
                <input type="email" className="form-control" id="emailContact" placeholder="Enter email" name="email" required="required" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control" id="subject" placeholder="Enter Subject" name="subject" required="required" />
                </div>
                <div className="form-group">
                <textarea className="form-control" rows={5} placeholder="Enter Message" id="msg" name="msg" required="required"/>
                </div>
                <br />
                <button type="submit" className="btn btn-info">Send</button>
            </form><br /><br />
        </div>

      </div>
    );
  }
}

export default Contact;
