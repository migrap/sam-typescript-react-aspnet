System.register(['react', './../sam/sam.views', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, sam_views_1, Subject_1;
    var RocketViews;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (sam_views_1_1) {
                sam_views_1 = sam_views_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            class RocketViews extends sam_views_1.Views {
                constructor() {
                    super();
                    this.updated = new Subject_1.Subject();
                }
                init(model) {
                    this.ready(model);
                }
                display(representation) {
                    this.representation = representation;
                    this.updated.next(representation);
                }
                // State representation of the ready state
                ready(model) {
                    class Ready extends React.Component {
                        start(props) {
                            console.log("start");
                            props.actions.start({});
                        }
                        render() {
                            return (React.createElement("div", null, React.createElement("p", null, "Counter: ", model.counter), React.createElement("button", {onClick: () => this.start(this.props)}, "Start")));
                        }
                    }
                    return Ready;
                }
                // State representation of the counting state
                counting(model) {
                    class Counting extends React.Component {
                        abort(props) {
                            props.actions.abort({});
                        }
                        render() {
                            return (React.createElement("div", null, React.createElement("p", null, "Counter: ", model.counter), React.createElement("button", {onClick: () => this.abort(this.props)}, "Abort")));
                        }
                    }
                    return Counting;
                }
                // State representation of the aborted state
                aborted(model) {
                    class Aborted extends React.Component {
                        render() {
                            return React.createElement("p", null, "Aborted at counter: ", model.counter);
                        }
                    }
                    return Aborted;
                }
                // State representation of the launched state
                launched(model) {
                    class Launched extends React.Component {
                        render() {
                            return React.createElement("p", null, "Launched");
                        }
                    }
                    return Launched;
                }
            }
            exports_1("RocketViews", RocketViews);
        }
    }
});
//# sourceMappingURL=rocket.views.js.map