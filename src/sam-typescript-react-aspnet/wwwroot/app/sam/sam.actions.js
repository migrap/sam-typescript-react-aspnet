System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Actions;
    return {
        setters:[],
        execute: function() {
            class Actions {
                constructor(model) {
                    this.model = model;
                }
                present(data) {
                    this.model.present(data);
                }
            }
            exports_1("Actions", Actions);
        }
    }
});
//# sourceMappingURL=sam.actions.js.map