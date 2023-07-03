// In this file you must import all the folders you have with json data, and create a class with its constructor before being injected in the plugin file

import globalData from './globalData';

export default class GlobalDataService {
    constructor() {
        this.items = globalData.items
    }
}