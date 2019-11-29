import React, { Component } from 'react';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

// The ColorSelector component provides the user interface to select a specific color.
//When a particular Cell is clicked, its background color becomes whatever the current selected color is

export default class ColorSelector extends Component {


makeColorSwatches = () => (
  ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
    let callback = () => this.props.setSelectedColor(str)
    return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
  }) //onClick invokes a callback function (no arguments)
)

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
