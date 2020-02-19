import React from 'react';

const AddBuilding = (props) => {
    return (
        <form onSubmit={props.addBuilding}>
          <label>Address</label>
          <input id="address" name="address" type="text" />

          <label>Code</label>
          <input id="code" name="code" type="text" />

          <label>Latitude</label>
          <input id="Latitude" name="Latitude" type="text" />

          <button>Send data!</button>
        </form>
    );

};

export default AddBuilding;
