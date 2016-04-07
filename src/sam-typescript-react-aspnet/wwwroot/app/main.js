/// <reference path='../../typings/main/ambient/react/index.d.ts'/>
System.register(['react', 'react-dom', './rocket/rocket.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, rocket_component_1;
    var Props, HelloMessage;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (rocket_component_1_1) {
                rocket_component_1 = rocket_component_1_1;
            }],
        execute: function() {
            class Props {
            }
            class HelloMessage extends React.Component {
                render() {
                    return React.createElement("div", null, "Hello ", this.props.name, "!!");
                }
            }
            //ReactDOM.render(<HelloMessage name="Michael"/>, document.getElementById('content'));
            ReactDOM.render(React.createElement(rocket_component_1.RocketComponent, null), document.getElementById('content'));
        }
    }
});
//# sourceMappingURL=main.js.map