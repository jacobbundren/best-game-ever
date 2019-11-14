import {Injectable} from "@angular/core";

@Injectable()
export class ProgressService {
    private _progress: string;

    public set progress(progress: string) {
        this._progress = progress;
    }

    public get progress(): string {
        return this._progress;
    }
}