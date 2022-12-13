export default class Task {
    constructor(description, completed) {
        this.id = +(Math.random() * 1000).toFixed(0);
        this.description = description;
        this.completed = false;
    }

    set(propName, value) {
        this[propName] = value;
    }
    get(propName) {
        return this[propName];
    }
}