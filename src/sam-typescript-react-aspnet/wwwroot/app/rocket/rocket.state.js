System.register(['./../sam/sam.state', './rocket.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var sam_state_1, rocket_model_1;
    var RocketState;
    return {
        setters:[
            function (sam_state_1_1) {
                sam_state_1 = sam_state_1_1;
            },
            function (rocket_model_1_1) {
                rocket_model_1 = rocket_model_1_1;
            }],
        execute: function() {
            class RocketState extends sam_state_1.State {
                constructor(views, actions) {
                    super(views, actions);
                    this.views = views;
                    this.actions = actions;
                    this.launched = function (model) {
                        return ((model.counter == 0) && model.started && model.launched && !model.aborted);
                    };
                    this.aborted = function (model) {
                        return ((model.counter <= rocket_model_1.COUNTER_MAX) && (model.counter >= 0) && model.started && !model.launched && model.aborted);
                    };
                }
                ready(model) {
                    return ((model.counter === rocket_model_1.COUNTER_MAX) && !model.started && !model.launched && !model.aborted);
                }
                counting(model) {
                    var status = ((model.counter <= rocket_model_1.COUNTER_MAX) && (model.counter >= 0) && model.started && !model.launched && !model.aborted);
                    return status;
                }
                representation(model) {
                    var representation = {};
                    if (this.ready(model)) {
                        representation = this.views.ready(model);
                    }
                    if (this.counting(model)) {
                        representation = this.views.counting(model);
                    }
                    if (this.launched(model)) {
                        representation = this.views.launched(model);
                    }
                    if (this.aborted(model)) {
                        representation = this.views.aborted(model);
                    }
                    this.views.display(representation);
                }
                next(model) {
                    if (this.counting(model)) {
                        if (model.counter > 0) {
                            this.actions.decrement({ counter: model.counter }, model.present);
                        }
                        if (model.counter === 0) {
                            this.actions.launch({}, model.present);
                        }
                    }
                }
                redner(model) {
                    //super.render(model);
                    this.representation(model);
                    this.next(model);
                }
            }
            exports_1("RocketState", RocketState);
        }
    }
});
//# sourceMappingURL=rocket.state.js.map