import globalData from './globalData';

export default class GlobalDataService {
    constructor() {
        this.items = globalData.items
    }
}