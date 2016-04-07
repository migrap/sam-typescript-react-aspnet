System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Model;
    return {
        setters:[],
        execute: function() {
            class Model {
                constructor(state) {
                    this.state = state;
                }
                present(data) {
                    this.render(this);
                }
                render(model) {
                    this.state.render(model);
                }
            }
            exports_1("Model", Model);
        }
    }
});
//# sourceMappingURL=sam.model.js.map