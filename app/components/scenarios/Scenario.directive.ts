import {Directive, ViewContainerRef} from "@angular/core";

/**
 * A directive for hosting scenarios.
 */
@Directive({
    selector: "[scenario-host]"
})
export class ScenarioDirective {

    private _viewContainerRef: ViewContainerRef;

    constructor(viewContainerRef: ViewContainerRef) {
        this._viewContainerRef = viewContainerRef;
    }

    public get viewContainerRef(): ViewContainerRef {
        return this._viewContainerRef;
    }
}