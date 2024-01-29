import { Log } from "./models/Log";

export class BaseLog implements Log {
    public log(content: String|Object|null) {
        console.log("Default base logging... ", content);
    }
}
