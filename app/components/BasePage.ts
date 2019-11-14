import {NavigatedData, Page, ShownModallyData} from "tns-core-modules/ui/page";
import statusBar = require("nativescript-status-bar");
import {
    ApplicationEventData, exitEvent, launchEvent, on, resumeEvent,
    suspendEvent
} from "tns-core-modules/application";


/**
 * BasePage provides lifecycle states for Nativescript.
 */
export class BasePage {

    /**
     * The page associated with the lifecycle states.
     */
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
        this.page.on("navigatingTo", this.onNavigatingTo.bind(this));
        this.page.on("navigatedTo", this.onNavigatedTo.bind(this));
        this.page.on("navigatingFrom", this.onNavigatingFrom.bind(this));
        this.page.on("navigatedFrom", this.onNavigatedFrom.bind(this));
        this.page.on("showingModally", this.onShowingModally.bind(this));
        this.page.on("shownModally", this.onShownModally.bind(this));
        on(suspendEvent, this.onPause.bind(this));
        on(resumeEvent, this.onResume.bind(this));
        on(launchEvent, this.onStart.bind(this));
        on(exitEvent, this.onStop.bind(this));
        this.hideActionBar();
        this.hideStatusBar();
    }

    /**
     * Raised when navigation to the page has started.
     */
    protected onNavigatingTo(arg?: NavigatedData): void {}

    /**
     * Raised when navigation to the page has finished.
     */
    protected onNavigatedTo(arg?: NavigatedData): void {}

    /**
     * Raised when navigation from the page has started.
     */
    protected onNavigatingFrom(arg?: NavigatedData): void {}

    /**
     * Raised when navigation from the page has finished.
     */
    protected onNavigatedFrom(arg?: NavigatedData): void {}

    /**
     * Raised before the page is shown as a modal dialog.
     */
    protected onShowingModally(arg?: ShownModallyData): void {}

    /**
     * Raised after the page is shown as a modal dialog.
     */
    protected onShownModally(arg?: ShownModallyData): void {}

    /**
     * Called when the app is paused (sent to background)
     */
    protected onPause(arg?: ApplicationEventData): void {}

    /**
     * Called when the app is resumed (returned from background)
     */
    protected onResume(arg?: ApplicationEventData): void {}

    /**
     * Called when the app is started
     */
    protected onStart(arg?: ApplicationEventData): void {}

    /**
     * Called when the app has been stopped
     */
    protected onStop(arg?: ApplicationEventData): void {}

    /**
     * Hides the status bar.
     */
    public hideStatusBar(): void {
        if (statusBar) {
            statusBar.hide();
        }
    }

    /**
     * Shows the status bar.
     */
    public showStatusBar(): void {
        if (statusBar) {
            statusBar.show();
        }
    }

    /**
     * Hides the action bar.
     */
    public hideActionBar(): void {
        this.page.actionBarHidden = true;
    }

    /**
     * Shows the action bar.
     */
    public showActionBar(): void {
        this.page.actionBarHidden = false;
    }
}