//import { Component, EventEmitter, Output, ElementRef } from 'angular2/core';
//import { Type } from 'angular2/src/facade/lang';
//import {Observable} from 'rxjs/Observable';
//import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';
import * as React from 'react';
import {RocketModel} from './rocket.model';
import {Views} from './../sam/sam.views';
import {RocketActions} from './rocket.actions';
import {Subject} from 'rxjs/Subject';

declare var jQuery: any;

export class RocketViews extends Views {
    constructor() {
        super();
    }

    updated: Subject<any> = new Subject<any>();

    init(model) {
        this.ready(model);
    }
    
    display(representation): void {
        this.representation = representation;
        this.updated.next(representation);
    }

    // State representation of the ready state
    ready(model) {
        class Ready extends React.Component<any, any>{
            start(props) {
                console.log("start");
                props.actions.start({});                
            }

            render() {
                return (
                    <div>
                        <p>Counter: {model.counter}</p>    
                        {/* onClick scoped using ES6 */} 
                        <button onClick={() => this.start(this.props) }>Start</button>                                         
                    </div>
                )
            }
        }
        return Ready;
    }

    // State representation of the counting state
    counting(model) {       
        class Counting extends React.Component<any, any>{
            abort(props) {
                props.actions.abort({});
            }
            render() {
                return (
                    <div>
                        <p>Counter: {model.counter}</p>
                        {/* onClick scoped using ES6 */} 
                        <button onClick={() => this.abort(this.props) }>Abort</button>
                    </div>
                )
            }
        }
        return Counting;
    }

    // State representation of the aborted state
    aborted(model) {
        class Aborted extends React.Component<any, any>{
            render() {
                return <p>Aborted at counter: {model.counter}</p>
            }
        }
        return Aborted;
    }

    // State representation of the launched state
    launched(model) {
        class Launched extends React.Component<any, any>{
            render() {
                return <p>Launched</p>
            }
        }
        return Launched;
    }
}