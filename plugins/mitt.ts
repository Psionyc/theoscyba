import mitt from 'mitt'

export default defineNuxtPlugin((nuxtApp) => {

    type events = {
        openRegistration: any
    }
    const eventManager = mitt()
    console.log(eventManager)
    return {
        provide: {
            eventManager
        }
    }
})