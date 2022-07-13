import React, { Component } from "react";
import Anniversary from "./Anniversary";
import BirthdayCake from "./BirthdayCake";
import JoiningKit from "./JoiningKit"

export class PerksOfJoining extends Component {
  render() {
    return (
        <>
          <form>
            <div className="container text-center">
              <div className="row ">
                <div className="col-sm xyzz ">
                  <JoiningKit />
                </div>
                <div className="col-sm xyzz">
                  <BirthdayCake />
                </div>
                <div className="col-sm xyzz">
                  <Anniversary />
                </div>
                <br />
                <br />

              </div>
              <div className="text-center">
                <br />
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    console.log("DONE WITH TH PROCESS");
                  }}
                >
                  Submit Response
                </button>
                <br />
                <br />
              </div>
            </div>
          </form>
        </>
    );
  }
}

export default PerksOfJoining;
