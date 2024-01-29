import { BaseLog } from "./BaseLog";

export class ConsoleLog extends BaseLog {
    public log(content: string | object | null) {
        console.log(content);
    }
}
