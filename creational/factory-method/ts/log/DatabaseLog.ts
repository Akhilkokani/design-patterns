import { BaseLog } from "./BaseLog";

export class DatabaseLog extends BaseLog {
    public log(content: Object | String | null): void {
        console.log("Logging to the datbase... ", content);
    }
}
