import * as React from 'react';
import {Actions} from './sam.actions';
import {Model} from './sam.model';
import {State} from './sam.state';
import {Views} from './sam.views';

export class Sam<A extends Actions, M extends Model, S extends State, V extends Views> extends React.Component<any, any> {
    public actions: A;
    public model: M;
    public state: S;
    public views: V;

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