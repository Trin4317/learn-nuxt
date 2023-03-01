export default defineEventHandler(async (event) => {
    // const { name } = getQuery(event)
    // const { age } = await readBody(event)
    // TODO: resolve unknown data type for data
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=APIKEY')
    return data
})