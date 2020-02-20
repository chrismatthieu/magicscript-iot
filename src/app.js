//
import React from 'react';
import { View, Button } from 'magic-script-components';

export default class MyApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      message: props.message
    };
  }

  render () {
    return (
      <View name="main-view">
      <linearLayout>
      <button onClick={() => updateBlink1('red')}>Red</button>
      <button onClick={() => updateBlink1('blue')}>Blue</button>
      <button onClick={() => updateBlink1('green')}>Green</button>
      <button onClick={() => updateBlink1('off')}>Off</button>
      </linearLayout>
      </View>
    );
  }
}

function updateBlink1(color){
  console.log(color);
  fetch("http://192.168.0.10:3000/" + color)
}
