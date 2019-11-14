import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'dialog',
    moduleId: module.id,
    templateUrl: 'Dialog.component.html',
    styleUrls: ['Dialog.component.css']
})
export class Dialog implements OnInit {

    public activeDialogue: string;
    public speaker: string;

    public constructor(){
        this.activeDialogue = "";
        this.speaker = "";
    }

    public ngOnInit() {
    }

    public dialogueChange(speaker: string, dialogue: string): void {
        this.speaker = speaker;
        this.activeDialogue = dialogue;
    }

}