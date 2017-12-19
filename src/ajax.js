const apiHost = 'https://bakesaleforgood.com'
export default {
  async fetchInitialDeals() {
    try {
      const response = await fetch(`${apiHost}/api/deals`)
      const responseJson = await response.json()
      return responseJson
    } catch (error) {
      console.warn(error)
    }
  },

  async fetchDealDetail(dealId) {
    try {
      const response = await fetch(`${apiHost}/api/deals/${dealId}`)
      const responseJson = await response.json()
      return responseJson
    } catch (error) {
      console.warn(error)
    }
  }
}
