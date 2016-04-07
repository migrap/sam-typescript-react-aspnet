/// <reference path='../../typings/main/ambient/react/index.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RocketComponent} from './rocket/rocket.component';

class Props {
    name: string;
}

class HelloMessage extends React.Component<Props, {}> {
    render() {
        return <div>Hello {this.props.name}!!</div>;
    }
}

//ReactDOM.render(<HelloMessage name="Michael"/>, document.getElementById('content'));
ReactDOM.render(<RocketComponent />, document.getElementById('content'));