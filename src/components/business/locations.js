import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Locations Component. These are used when registering a business
 * 
 * ```html
 * <Locations />
 * ```
 */
const Locations =()=> {
    return (
        <select className="form-control mb-2 mr-sm-2" name="location">
            <option value="">Business Location</option> 
            <option value="Mbarara">Mbarara</option>
            <option value="Kampala">Kampala</option>
            <option value="Gulu">Gulu</option>
            <option value="Soroti">Soroti</option>
            <option value="Hoima">Hoima</option>
            <option value="Kabarole">Kabarole</option>
        </select>
    );
  }

export default Locations;