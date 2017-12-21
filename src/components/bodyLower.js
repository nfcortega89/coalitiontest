import React, { Component } from "react";
import "../bodyLower.css";

class BodyLower extends Component {
  render() {
    return (
      <section className="bodyLower">
        <div className="contactUs">
          <h3>Contact Us</h3>
          <div className="formWrapper">
            <form>
              <input
                className="form formTop"
                type="text"
                name="name"
                placeholder="Name *"
              />
              <div className="formMiddle">
                <input
                  className="form formMiddle"
                  type="text"
                  name="phone"
                  placeholder="Phone *"
                />
                <input
                  className="form formMiddle"
                  type="text"
                  name="email"
                  placeholder="Email *"
                />
              </div>
              <input
                className="form formBottom"
                type="text"
                name="message"
                placeholder="Message *"
              />
              <input className="submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="reachUs">
          <h3>Reach Us</h3>
          <div className="reachWrapper">
            <div className="reachInfo">
              <h4>Coalition Skills Test</h4>
              <span>535 La Plata Street</span>
              <span>4200 Argentina</span>
              <div className="numbers">
                <span>Phone: 385.154.11.28.38</span>
                <span>Fax: 385.154.35.66.78</span>
              </div>
            </div>
            <div className="social">
              <i className="fa fa-facebook facebook" aria-hidden="true" />
              <i className="fa fa-twitter twitter" aria-hidden="true" />
              <i className="fa fa-linkedin linkedin" aria-hidden="true" />
              <i className="fa fa-pinterest pinterest" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BodyLower;
