// Creating injection for big json data, you can call them by creating a computed property.
// EXAMPLE this.$allData.nameOfJsonData

// In this performance i've created a globa data service, but, often, in large projects it must be divided in folders and files ir order to improve readability and modularity

import GlobalDataService from '~/services/jsonServices/globalDataService'

export default ({ app }, inject) => {
    const globalData = new GlobalDataService()
    inject('allData', globalData)
}