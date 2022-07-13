import React, { Component } from 'react'
export class ShootOut extends Component {
  
  

  render() {
    return (
     <section>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
        Add Employee</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Fill details</h5>
                <button type="button"  class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <form>     
                <label> ID :</label>
                <input  type="id" name="id" id="id" placeholder="Enter Your id..." required/>
                <label> Name :</label>
                <input  type="name" name="name" id="name" placeholder="Enter Your Name..." required/>
                <br/><br/>
                <label for="birthday">Birthday:</label>
                <input type="date" name="birthday" id="birthday" placeholder="Enter Your bday" required/>
                <br/><br/>
                <label for="birthday">joining:</label>
                <input  type="date" name="joining" id="joining" placeholder="Enter Your joiningday" required/>
                <br/><br/>
                <label> City :</label> 
                <input  type="name" name="name" id="name" placeholder="Enter Your Name..." required/>
              </form>

                {/* <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <input type="text" class="form-control" id="recipient-name"/>
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form> */}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Add Employee</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}
export default ShootOut