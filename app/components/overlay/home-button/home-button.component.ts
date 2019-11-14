import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'HomeButton',
    moduleId: module.id,
    templateUrl: 'home-button.component.html',
    styleUrls: ['../../../common.css']
})
export class HomeButton {

    @Output() public homeTapped: EventEmitter<any> = new EventEmitter();

    public onHomeTapped(): void {
        this.homeTapped.emit(null);
    }
}