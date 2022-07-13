import React from 'react'
import AdminService from "../src/services/AdminService";


export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.company_name}</strong>


    <select
      className="form-control "
      name="{props.company_name}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
      
      
      <option key={index} value={item.id}>
      
         {item.company_name}
        </option>
      ))}
    </select>


{/* 
    const filterItem = (company_id) => {

const newItem = Data.filter((company_id) => {

return company_id.employer_id === company_id;
   setItem(newItem);
});
}; */}





{/* 
<select
      className="form-control "
      name="{props.company_id}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.id}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.company_id}
        </option>
      ))}
    </select>

 */}

  </div>
)













var FilterForm =()=>({
  getInitialState: function () {
    return {
      data: this.props.data,
      company_name: "",
      multiple: false,
    };
  },
  checked: function (e) {
    this.setState({ multiple: e.target.value });
  },
  filterItems: function (val, type) {
    switch (type) {
      case "company_name":
        this.setState({ company_name: val });
        break;

      default:
        break;
    }
  },

  render: function () {
    var filteredItems = this.props.data;
    var state = this.state;
    var filterProperties = ["company_name"];
    filterProperties.forEach(function (filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function (item) {
          return item[filterBy] === filterValue;
        });
      }
    });

    var company_nameArray = this.props.data.map(function (item) {
      return item.company_name;
    });
    company_nameArray.unshift("");
    return (
      <div className="container">
        <FilterOptions
          data={this.state.data}
          company_nameOptions={company_nameArray}
          changeOption={this.filterItems}
        />
        <div className="filter-form">
          <FilterItems data={filteredItems} />
        </div>
      </div>
    );
  },
});


var FilterOptions=()=>({
  changeOption: function (type, e) {
    var val = e.target.value;
    this.props.changeOption(val, type);
  },
  render: function () {
    return (
      <div className="filter-options">
        <div className="filter-option">
          <label>company_name</label>
          <select
            id="company_name"
            value={this.props.company_name}
            onChange={this.changeOption.bind(this, "company_name")}
          >
            {this.props.company_nameOptions.map(function (option) {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  },
});



var FilterItems =()=>({
  render: function () {
    return (
      <div className="filter-items">
        {this.props.data.map(function (item) {
          return <div className="filter-item">{item.name}</div>;
        })}
      </div>
    );
  },
});




export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      companyname: [],
      company_id:[],
      value: '',
    }
  }
  componentDidMount() {
    AdminService.companyname()
      .then((response) => response.json())
      .then(data=>{
        this.setState({companyname:data.data})
        // console.log()


    })
    .then(data=>{
      this.setState({company_id:data.data})
    });
     
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
    console.log(event.target.value)
    //console.log(AdminService.company_name)

  }
  

  // const filterItem = (company_id) => {

  //   const newItem = Data.filter((company_id) => {
    
  //   return company_id === company_id;

  //   setItem(newItem);
  //   });
  //   };
    

  render() {
    return (
      <div className="container">
       
        <CustomDropdown
          name={this.state.company_name}
          options={this.state.companyname}
          onChange={this.onChange}
        />
      </div>
    )
  }
}


  // onFiltering(e) {
  //   // load overall data when search key empty.
  //   if (e.companyname === AdminService.companyname.company_name) {
  //       e.updateData(this.event.target.value);
  //       console.log();
  //   }
  //   else {
  //       // restrict the remote request until search key contains 3 characters.
  //       if (e.companyname.company_name) {
  //           return;
  //       }
  //       // let query = new Query().select(['companyname', 'company_id']);
  //       // query = (e.company_name !== '') ? query.where('companyname', 'companyid', e.companyname, true) : query;
  //       // e.updateData(this.searchData, query);
  //     }}