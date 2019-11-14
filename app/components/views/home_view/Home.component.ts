import {Component} from "@angular/core";
import {BasePage} from "../../BasePage";
import {NavigatedData, Page} from "tns-core-modules/ui/page";
import {RouterExtensions} from "nativescript-angular";
import {TNSPlayer} from "nativescript-audio";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "Home.component.html",
    styleUrls: ["../../../common.css"]
})

export class Home extends BasePage {

    public returningUser: boolean;
    public playText: string;
    public newGameText: string;
    private _player: TNSPlayer;

    public constructor(protected page: Page, private routerExtensions: RouterExtensions){
        super(page);
        this._player = new TNSPlayer();
        this.returningUser = true;
        this.playText = "Play";
        this.newGameText = "New Game";
    }

    public playGame(): void {
        this.routerExtensions.navigate(["/gameengine"], {
            animated: false
        })
    }

    public startNewGame(): void {
    }

    public openSettings(): void {
    }

    public openAboutUs(): void {
        console.log("YOU'RE IN THE ABOUT US NOW!");
    }

    protected onNavigatedTo(arg?: NavigatedData): void {
        this.playAudio();
    }

    protected onNavigatedFrom() {
        this._player.pause();
    }

    private playAudio(): void {
        this._player.playFromFile({
            audioFile: "~/assets/audio/rebeltheme.mp3",
            loop: true
        });
    }
}