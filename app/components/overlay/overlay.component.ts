import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {IGlyphOptions} from "./glyph/IGlyphOptions";
import {Glyph} from "./glyph/glyph.component";
import {OptionSelection} from "./glyph/OptionSelection";
import {Dialog} from "./dialog/Dialog.component";
import {Visibility} from "tns-core-modules/ui/styling/style-properties";

@Component({
    selector: 'Overlay',
    moduleId: module.id,
    templateUrl: 'overlay.component.html',
    styleUrls: ['../../common.css']
})
export class Overlay {
    @Output() public optionSelected: EventEmitter<OptionSelection> = new EventEmitter<OptionSelection>();
    @Output() public homeTapped: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild(Glyph) private _glyph: Glyph;
    @ViewChild(Dialog) dialog: Dialog;

    public dialogVisible: Visibility;
    public glyphVisible: Visibility;

    public constructor() {
        this.dialogVisible = "collapse";
        this.glyphVisible = "collapse";
    }

    public handleOptionSelected(optionSelected: OptionSelection): void {
        this.optionSelected.emit(optionSelected);
    }

    public onHomeTapped(): void {
        this.homeTapped.emit(null);
    }

    public activateGlyph(options: IGlyphOptions): void {
        this.showGlyph();
        this._glyph.activateGlyph(options);
    }

    public changeDialogue(speaker: string, dialogue: string): void {
        this.dialog.dialogueChange(speaker, dialogue);
    }

    public showDialog(): void {
        this.dialogVisible = "visible";
    }

    public hideDialog(): void {
        this.dialogVisible = "collapse";
    }

    public showGlyph(): void {
        this.glyphVisible = "visible";
    }

    public hideGlyph(): void {
        this.glyphVisible = "collapse";
    }
}
