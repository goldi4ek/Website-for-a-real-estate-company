import {makeAutoObservable} from "mobx";

export default class PurposeStore {
    constructor() {
        this._purposes = []
        makeAutoObservable(this)
    }

    setPurposes(purposes) {
        this._purposes = purposes
    }

    get purposes() {
        return this._purposes
    }
}