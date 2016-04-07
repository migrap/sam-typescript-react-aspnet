import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RocketActions} from './rocket.actions';
import {RocketModel} from './rocket.model';
import {RocketState} from './rocket.state';
import {RocketViews} from './rocket.views';
import {Sam} from '../sam/sam.component';

declare var jQuery: any;

export class RocketComponent extends Sam<RocketActions, RocketModel, RocketState, RocketViews> {
    constructor() {
        super(RocketActions, RocketModel, RocketState, RocketViews);
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