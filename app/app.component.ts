import {Component, OnInit} from "@angular/core";
import {BasePage} from "./components/BasePage";
import {NavigatedData, Page} from "tns-core-modules/ui/page";
import orientation = require("nativescript-orientation");
import {Fullscreen} from "./helpers/Fullscreen";
import {ApplicationEventData} from "tns-core-modules/application";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent extends BasePage implements OnInit {

    constructor(page: Page) {
        super(page);
    }

    public ngOnInit(): void {
        orientation.setOrientation("landscape");
    }

    protected onNavigatedTo(arg?: NavigatedData): void {
        Fullscreen.makeFullscreen();
    }

    protected onResume(arg?: ApplicationEventData): void {
        Fullscreen.makeFullscreen();
    }
}
