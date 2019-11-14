import {isAndroid} from "tns-core-modules/platform";
import {AndroidViewFlag} from "./AndroidViewFlag";
import * as app from "tns-core-modules/application";

/**
 * Sets android to fullscreen.
 */
export class Fullscreen {

    /**
     * Sets android to fullscreen.
     */
    public static makeFullscreen(): void {
        if (isAndroid) {
            let window = app.android.startActivity.getWindow();
            let decorView: android.view.View = window.getDecorView();

            decorView.setSystemUiVisibility(
                AndroidViewFlag.SYSTEM_UI_FLAG_FULLSCREEN |
                AndroidViewFlag.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                AndroidViewFlag.SYSTEM_UI_FLAG_IMMERSIVE_STICKY |
                AndroidViewFlag.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
                AndroidViewFlag.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
                AndroidViewFlag.SYSTEM_UI_FLAG_LAYOUT_STABLE
            );
        }
    }
}