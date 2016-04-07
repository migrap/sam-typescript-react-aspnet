System.register(['./../sam/sam.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var sam_model_1;
    var COUNTER_MAX, RocketModel;
    return {
        setters:[
            function (sam_model_1_1) {
                sam_model_1 = sam_model_1_1;
            }],
        execute: function() {
            exports_1("COUNTER_MAX", COUNTER_MAX = 3);
            class RocketModel extends sam_model_1.Model {
                constructor(state) {
                    super(state);
                    this.state = state;
                    this.counter = COUNTER_MAX;
                    this.started = false;
                    this.launched = false;
                    this.aborted = false;
                }
                present(data) {
                    console.log("present : " + data);
                    if (this.state.counting(this)) {
                        if (this.counter === 0) {
                            this.launched = data.launched || false;
                        }
                        else {
                            this.aborted = data.aborted || false;
                            if (data.counter !== undefined) {
                                this.counter = data.counter;
                            }
                        }
                    }
                    else {
                        if (this.state.ready(this)) {
                            this.started = data.started || false;
                        }
                    }
                    this.state.render(this);
                    //super.render(this);
                }
            }
            exports_1("RocketModel", RocketModel);
        }
    }
});
//# sourceMappingURL=rocket.model.js.map