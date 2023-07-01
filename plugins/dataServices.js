import GlobalDataService from '~/services/jsonServices/globalDataService'

export default ({ app }, inject) => {
    const globalData = new GlobalDataService()
    inject('allData', globalData)
}