import React from '../lumin/node_modules/react/index.js';
import { View } from '../node_modules/magic-script-components/src/components.js';

//
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message
    };
  }

  render() {
    return React.createElement(View, {
      name: "main-view"
    }, React.createElement("linearLayout", null, React.createElement("button", {
      onClick: () => updateBlink1('red')
    }, "Red"), React.createElement("button", {
      onClick: () => updateBlink1('blue')
    }, "Blue"), React.createElement("button", {
      onClick: () => updateBlink1('green')
    }, "Green"), React.createElement("button", {
      onClick: () => updateBlink1('off')
    }, "Off")));
  }

}

function updateBlink1(color) {
  console.log(color);
  fetch("http://192.168.0.10:3000/" + color);
}

export default MyApp;
