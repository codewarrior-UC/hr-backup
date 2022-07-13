
import EmployeeList from "./EmployeeList";
import React from "react";


var FilterForm = React.createClass({
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

var FilterOptions = React.createClass({
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



var FilterItems = React.createClass({
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

React.render(
  <FilterForm data={EmployeeList} />,
  document.getElementById("filter")
);

/*if (val) {
        filteredItems = this.props.data.filter(function(item) {
          return item[type] === val;
        });
      } else {
        filteredItems = this.props.data;
      }*/
//this.setState({data: filteredItems});
