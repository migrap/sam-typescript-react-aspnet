import {State} from './sam.state';

export class Model {
    constructor(public state: State) {
    }

    public present(data) {
        this.render(this);
    }

    public render(model) {
        this.state.render(model);
    }
}