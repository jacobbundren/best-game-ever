import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {Glyph} from "./components/overlay/glyph/glyph.component";
import {HomeButton} from "./components/overlay/home-button/home-button.component";
import {ScenarioDirective} from "./components/scenarios/Scenario.directive";
import {GameEngine} from "./components/GameEngine.component";
import {ProgressService} from "./components/services/ProgressService";
import {Overlay} from "./components/overlay/overlay.component";
import {Home} from "./components/views/home_view/Home.component";
import {TNSFontIconModule} from "nativescript-ngx-fonticon";
import {Dialog} from "./components/overlay/dialog/Dialog.component";
import {Scenario1} from "./components/scenarios/scenario_1/Scenario1.component";
import {Scenario2} from "./components/scenarios/scenario_2/Scenario2.component";
import {Scenario3} from "./components/scenarios/scenario3/Scenario3.component";
import {Scenario5} from "./components/scenarios/scenario5/Scenario5.component";
import {Scenario6} from "./components/scenarios/scenario6/Scenario6.component";
import {Scenario7} from "./components/scenarios/scenario7/Scenario7.component";
import {Scenario8} from "./components/scenarios/scenario8/Scenario8.component";
import {Scenario9} from "./components/scenarios/scenario9/Scenario9.component";
import {Scenario10} from "./components/scenarios/scenario10/Scenario10.component";
import {Scenario11} from "./components/scenarios/scenario11/Scenario11.component";
import {Death} from "./components/scenarios/death/Death.component";

import {ScenarioC} from "./components/scenarios/scenario_c/ScenarioC.component";
import {Scenario4} from "./components/scenarios/scenario4/Scenario4.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            "fa": "./fonts/font-awesome.css"
        })
    ],
    declarations: [
        AppComponent,
        Glyph,
        HomeButton,
        ScenarioDirective,
        GameEngine,
        Overlay,
        Home,
        Dialog,
        ScenarioC,
        Scenario1,
        Scenario2,
        Scenario3,
        Scenario4,
        Scenario5,
        Scenario6,
        Scenario7,
        Scenario8,
        Scenario9,
        Scenario10,
        Scenario11,
        Death
    ],
    entryComponents: [
        ScenarioC,
        Scenario1,
        Scenario2,
        Scenario3,
        Scenario4,
        Scenario5,
        Scenario6,
        Scenario7,
        Scenario8,
        Scenario9,
        Scenario10,
        Scenario11,
        Death
    ],
    providers: [
        ProgressService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
