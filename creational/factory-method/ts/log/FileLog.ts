import { BaseLog } from "./BaseLog";

export class FileLog extends BaseLog {
    public log(content: Object | String | null): void {
        console.log("Logging to the file... ", content);
    }
}