import {Model} from './sam.model';

export class Actions {
    constructor(public model: Model) {
    }

    present(data): void {
        this.model.present(data);
    }
}