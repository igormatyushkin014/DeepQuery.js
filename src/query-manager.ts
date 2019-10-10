export class QueryManager {

    constructor(
        private obj: any
    ) {
    }

    public getResult(
        query: string
    ): any {
        var value = this.obj;
        let pathComponents = query
            .split(".")
            .map(component => component.trim());

        for (let component of pathComponents) {
            let isFilter = component.includes(":");

            if (isFilter) {
                let [filterKey, filterValue] = component.split(":");
                
                if (value instanceof Array) {
                    value = value.filter(element => element[filterKey] == filterValue);
                } else {
                    break;
                }
            } else {
                value = value[component];
            }

            if (!value) {
                break;
            }
        }

        return value;
    }
}
