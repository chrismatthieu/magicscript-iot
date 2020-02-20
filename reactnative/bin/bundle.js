var _ = (function (React) {
    'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    function View(props) {
      // return (<view {...props} />);
      return React.createElement('view', props);
    }

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

    return MyApp;

}(React));
