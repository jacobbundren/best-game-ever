import {Component, ViewChild, ElementRef, Output, EventEmitter, OnInit} from '@angular/core';
import {IGlyphOptions} from "./IGlyphOptions";
import {Visibility} from "tns-core-modules/ui/enums";
import {Animation} from "tns-core-modules/ui/animation";
import {OptionSelection} from "./OptionSelection";
import {IDecision} from "./IDecision";
import {Observable} from "rxjs/Observable";
import {isAndroid} from "tns-core-modules/platform";
import {Page} from "tns-core-modules/ui/page";
import {Label} from "tns-core-modules/ui/label";

@Component({
    selector: 'Glyph',
    moduleId: module.id,
    templateUrl: 'glyph.component.html',
    styleUrls: ['glyph.component.css']
})
export class Glyph implements OnInit {

    @Output() public optionSelected: EventEmitter<IDecision> = new EventEmitter<IDecision>();
    public countdown: number;

    private _optionsVisibility: string;
    private _fadeSet: Animation;
    private _options: IGlyphOptions;
    private _page: Page;
    @ViewChild("glyph") private _glyph: ElementRef;

    constructor(page: Page) {
        this._optionsVisibility = Visibility.visible;
        this._options = {};
        this._page = page;
    }

    public ngOnInit(): void {
        this.initFade();
    }

    public activateGlyph(options: IGlyphOptions): void {
        console.log("GLYPH ACTIVATED");
        this._options = options;
        console.log("FADE ANIMATION STARTING");
        Observable.fromPromise(this._fadeSet.play()).mergeMap(
            () => {
                console.log("FADE ANIMATION COMPLETE");
                return this.startTimer();
            }
        ).subscribe(
            undefined,
            undefined,
            () => {
                this.decisionMade(OptionSelection.A);
            }
        );
    }

    public get options(): IGlyphOptions {
        return this._options;
    }

    public get optionsVisibility(): string {
        return this._optionsVisibility;
    }

    protected decisionMade(selection: OptionSelection): void {
        this.hideOptions();
        let decision: IDecision = {
            questionId: this._options.questionId,
            selected: selection
        };
        this.optionSelected.emit(decision);
    }

    protected glyphTapEvent(): void {
        this._fadeSet.cancel();
    }

    private showOptions(): void {
        this._optionsVisibility = Visibility.visible;
    }

    private hideOptions(): void {
        this._optionsVisibility = Visibility.collapse;
    }

    private initFade(): void {
        let fade = [];
        fade.push({ target: this._glyph.nativeElement, opacity: 0.4, duration: 250 });
        fade.push({ target: this._glyph.nativeElement, opacity: 1, duration: 250 });
        fade.push({ target: this._glyph.nativeElement, opacity: 0.4, duration: 250 });
        fade.push({ target: this._glyph.nativeElement, opacity: 1, duration: 250 });
        fade.push({ target: this._glyph.nativeElement, opacity: 0.4, duration: 250 });
        fade.push({ target: this._glyph.nativeElement, opacity: 1, duration: 250 });
        this._fadeSet = new Animation(fade, true);
    }

    private startTimer(): Observable<void> {
        console.log("COUNTDOWN STARTED");
        this.countdown = 10;
        return Observable.timer(1000, 1000).take(10).map(
            () => {
                this.countdown--;
            }
        );
    }

    public onLoad(): void {
        if (isAndroid) {
            let label: Label = this._page.getViewById<Label>("countdownLabel");
            label.android.setGravity(17); // Enumeration setting the label vertical orientation to center
        }
    }
}