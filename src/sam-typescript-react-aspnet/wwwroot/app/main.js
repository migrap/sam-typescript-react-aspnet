/// <reference path='../../typings/main/ambient/react/index.d.ts'/>
System.register(['react', 'react-dom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            }],
        execute: function() {
            ReactDOM.render(React.createElement("h3", null, "Hello World"), document.getElementById('content'));
        }
    }
});
