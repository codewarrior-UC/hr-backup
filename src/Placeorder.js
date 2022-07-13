import React from 'react'
import AdminService from "./services/AdminService";

export default class Placeorder extends React.Component{
  constructor()
  {
    super()
    this.state={
      msg :'',
      placeorder:[]
    }
  }
  

  save = (event)=>{
      event.preventDefault()
      var ob = {
        // quantity : this.qbox.value,
        comments : this.cbox.value,
        product_type : this.ptbox.value,
        company_id : this.cidbox.value,
        planned_date:this.pdbox.value,
        status : this.sbox.value,
     }
  var pro = AdminService.placeorder(ob)
      pro.then(response=>response.json())
      .then(data=>{  this.setState({'placeorder':data.data.order_result})
})
.catch(err=>{
  console.log(err)
})   


    }
  render()
  {
    return(<>
    <section class="section contact-me" data-section="section4">
    <div class="container">
      <div class="section-heading">
        <h2>PlaceOrder</h2>
        <div class="line-dec"></div>        
      </div>
      <div class="row">
        <div class="right-content">
          <div class="container">
            <form id="contact" 
            onSubmit={this.save}>
              <div class="row">
                {/* <div class="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      class="form-control"
                      ref={c=>this.qbox=c}
                      placeholder="quantity..."
                      required
                    />
                  </fieldset>
                </div> */}

                <div class="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      class="form-control"
                      ref={c=>this.cbox=c}
                      placeholder="comments..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      class="form-control"
                      ref={c=>this.ptbox=c}
                      placeholder="product_type..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input
                      name="company_id"
                      type="text"
                      class="form-control"
                      ref={c=>this.cidbox=c}
                      placeholder="company_id..."
                      required
                    />
                  </fieldset>
                </div>

                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="date"
                      class="form-control"
                      ref={c=>this.pdbox=c}
                      placeholder="planned_date..."
                      required
                    />
                  </fieldset>
                </div>


                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="phone"
                      class="form-control"
                      ref={c=>this.sbox=c}
                      placeholder="status..."
                      required
                    />
                  </fieldset>
                </div>

                <div class="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="button">
                      Register
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>)
  }
}