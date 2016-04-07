System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var State;
    return {
        setters:[],
        execute: function() {
            class State {
                constructor(views, actions) {
                    this.views = views;
                    this.actions = actions;
                }
                representation(model) {
                    var representation = 'oops... something went wrong, the system is in an invalid state';
                    this.views.display(representation);
                }
                next(model) {
                }
                render(model) {
                    this.representation(model);
                    this.next(model);
                }
            }
            exports_1("State", State);
        }
    }
});
//# sourceMappingURL=sam.state.js.map