import { LogFactory } from "./log/LogFactory";

class Main {
    public static main() {
        const consoleLogger = LogFactory.createLogger("console")
            , fileLogger = LogFactory.createLogger("file")
            , dbLogger = LogFactory.createLogger("database");

        consoleLogger.log("consoleLogger");
        fileLogger.log("fileLogger");
        dbLogger.log("dbLogger");
    }
}

Main.main();
