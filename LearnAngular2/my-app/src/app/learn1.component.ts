import {Component} from '@angular/core';
import {Game} from './game';

@Component({
    selector: 'learn1-angular',
    template:`
        <h1> New ONE </h1>
        <h2> {{title}} </h2>
        <h3> 'STRING' </h3>
        <ul>
            <li *ngFor='let game of games'>{{game}}</li>
        </ul>
        <h3> 'ENTITY' </h3>
        <ul>
            <li *ngFor='let game of gamesEntity'>
            {{game.id}} - {{game.name}}
            </li>
        </ul>        
        <input #gameinput id='gameinput' type='text'> 
        <h3>{{gameinput.value}}</h3>        
        <button (click)="onClick($event)">Click me!</button>
        
    `,
    styles:[`'h1 { color: red; color: red
    }'`]      
})
export class Learn1AngularComponent{
    public title: string = 'Binding inside';
    public games: string[] =['Lineage 2', 'The Witcher 3', 'Final Fantasy 15'];
    public gamesEntity: Game[];

    constructor(){
        this.gamesEntity =[];
        this.gamesEntity.push(new Game(1, 'Final Fantasy'));
        this.gamesEntity.push(new Game(2, '.Hack reboot'));
    }

    onClick(info){
        console.log(info);
    }

}