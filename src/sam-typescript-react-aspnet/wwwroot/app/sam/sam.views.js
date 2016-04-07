System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Views;
    return {
        setters:[],
        execute: function() {
            class Views {
                constructor() {
                    this.representation = '';
                }
                display(representation) {
                    this.representation = representation;
                }
            }
            exports_1("Views", Views);
        }
    }
});
//# sourceMappingURL=sam.views.js.map