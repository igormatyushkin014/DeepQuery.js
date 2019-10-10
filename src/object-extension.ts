import { QueryManager } from "./query-manager";

Object.defineProperty(
    Object.prototype,
    "__",
    {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(
            query: string
        ) {
            let queryManager = new QueryManager(
                this
            );
            return queryManager.getResult(
                query
            );
        }
    }
);
