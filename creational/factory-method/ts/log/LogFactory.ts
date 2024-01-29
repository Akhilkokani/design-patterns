import { ConsoleLog } from "./ConsoleLog";
import { FileLog } from "./FileLog";
import { DatabaseLog } from "./DatabaseLog";

export class LogFactory {
    public static createLogger(type: string) {
        switch (type) {
            case "console":
                return new ConsoleLog();

            case "database":
                return new DatabaseLog();

            case "file":
                return new FileLog();

            default:
                throw new Error("Invalid log type...");
        }
    }
}
