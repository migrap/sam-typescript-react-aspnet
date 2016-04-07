import {Actions} from './../sam/sam.actions';
import {RocketModel} from './rocket.model';

export class RocketActions extends Actions {
    constructor(public model: RocketModel) {
        super(model);
    }

    public init() {
        this.model.present({});
    }

    public display() {
        this.model.present({});
        return false;
    }

    public start(data, present) {
        data.started = true;
        this.model.present(data);
        return false;
    }

    public decrement(data, present) {
        present = present || this.model.present;
        data = data || {};
        data.counter = data.counter || 3;
        var d = data;
        var m = this.model;

        setTimeout(function () {
            d.counter = d.counter - 1;
            m.present(d);
        }, 1000);        
    }

    public launch(data, present) {
        present = present || this.model.present;
        data.launched = true;
        this.model.present(data);
        return false;
    }

    public abort(data, present) {
        present = present || this.model.present;
        data.aborted = true;
        this.model.present(data);
        return false;
    }
}