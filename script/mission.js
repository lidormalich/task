export default class Task {
    constructor(description, missionPriority) {
        this.id = +(Math.random() * 1000).toFixed(0);
        this.description = description;
        this.completed = false;
        this.priority = missionPriority;
        switch (missionPriority) {
            case "regular":
                this.missionPriorityNum = 2;
                break;
            case "low":
                this.missionPriorityNum = 1;
                break;
            case "hight":
                this.missionPriorityNum = 3;
                break;

            default:
                this.missionPriorityNum = 2;
                this.priority = "regular";
                break;
        }
    }

    set(propName, value) {
        this[propName] = value;
    }
    get(propName) {
        return this[propName];
    }
}