import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Categories extends Component {

  render() {
    return (
      <select className="form-control mb-2 mr-sm-2" name="category" >
        <option value="">Business Category</option>  
        <option value="Consulting">Consulting</option>
        <option value="Telecommunications">Telecommunications</option>
        <option value="Food and Beverages">Food and Beverages</option>
        <option value="Computing and Technology">Computing and Technology</option>
        <option value="Hotels and Accommodation">Hotels and Accommodation</option>
        <option value="Arts and Crafts">Arts and Crafts</option>
    </select>
    );
  }
}

export default Categories;