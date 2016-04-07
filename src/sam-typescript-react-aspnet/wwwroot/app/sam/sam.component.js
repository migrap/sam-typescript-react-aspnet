System.register(['react'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React;
    var Sam;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            }],
        execute: function() {
            class Sam extends React.Component {
                constructor(actions, model, state, views) {
                    super();
                    this.actions = new actions(this.model);
                    this.model = new model(this.state);
                    this.state = new state(this.views, this.actions);
                    this.views = new views();
                    // injection dependencies SAM
                    this.actions.model = this.model;
                    this.model.state = this.state;
                    this.state.views = this.views;
                    this.state.actions = this.actions;
                }
            }
            exports_1("Sam", Sam);
        }
    }
});
//# sourceMappingURL=sam.component.js.map