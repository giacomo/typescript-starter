import {Component} from '../../lib/Component';
import html from './Tooltip.html';

export class Tooltip extends Component {
    state = {
        test: 'Foobar',
        count: 0,
        name: 'Somename',
    };


    get template(): string {
        return html;
    }

    get binding(): Record<string, CallableFunction> {
        return {
            updateCounter: () => {
                this.state.count++;
            },
        };
    }
}
