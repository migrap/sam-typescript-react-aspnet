import {Views} from './sam.views';
import {Actions} from './sam.actions';

export class State {
    constructor(public views: Views, public actions: Actions) {
    }    

    representation(model) {
        var representation = 'oops... something went wrong, the system is in an invalid state';

        this.views.display(representation);
    }

    next(model): void {
    }

    render(model): void {
        this.representation(model);
        this.next(model);
    }
}