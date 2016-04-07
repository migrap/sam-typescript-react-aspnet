System.register(['react', './rocket.actions', './rocket.model', './rocket.state', './rocket.views', '../sam/sam.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, rocket_actions_1, rocket_model_1, rocket_state_1, rocket_views_1, sam_component_1;
    var RocketComponent;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (rocket_actions_1_1) {
                rocket_actions_1 = rocket_actions_1_1;
            },
            function (rocket_model_1_1) {
                rocket_model_1 = rocket_model_1_1;
            },
            function (rocket_state_1_1) {
                rocket_state_1 = rocket_state_1_1;
            },
            function (rocket_views_1_1) {
                rocket_views_1 = rocket_views_1_1;
            },
            function (sam_component_1_1) {
                sam_component_1 = sam_component_1_1;
            }],
        execute: function() {
            class RocketComponent extends sam_component_1.Sam {
                constructor() {
                    super(rocket_actions_1.RocketActions, rocket_model_1.RocketModel, rocket_state_1.RocketState, rocket_views_1.RocketViews);
                    this.actions.init();
                    this.views.updated.subscribe((x) => this.forceUpdate());
                    this.views.updated.subscribe((x) => {
                        if (this.state.launched(this.model)) {
                            jQuery(document).find('#rocket_launch').css("margin-bottom", "1000px");
                            jQuery(document).find(".cloud_fill").css("animation", "smoke_size .35s infinite");
                            jQuery(document).find('.rocket_shadow').css("animation", "shadow_flare .35s infinite");
                        }
                    });
                }
                render() {
                    return React.createElement(this.views.representation, this);
                }
            }
            exports_1("RocketComponent", RocketComponent);
        }
    }
});
//# sourceMappingURL=rocket.component.js.map