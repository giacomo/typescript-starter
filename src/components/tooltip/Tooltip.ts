import {Component} from '../../lib/Component';
import html from './Tooltip.html';
import {TooltipState} from '../../states/TooltipState';

export class Tooltip extends Component {
    state: TooltipState = {
        test: 'Foobar',
        count: 0,
        name: 'Fjord',
    };


    get template(): string {
        return html;
    }

    get binding(): Record<string, () => void> {
        return {
            updateCounter: () => {
                this.state.count++;
            },
        };
    }
}
