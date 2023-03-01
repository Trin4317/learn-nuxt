export default defineEventHandler((event) => {
    const { name } = getQuery(event)

    return {
        message: `Hello ${name} from Nuxt Store.`
    }
})