export interface Item {
    name?: string,
    count?: number,
    price?: number,
    size: 'm' | 'l' | 'xl' | 'xxl'
}

export const useStore = () => {
    const items = ref<Array<Item>>([])

    const itemCount = computed(() => items.value.length)

    function addItem() {

    }

    function removeItem() {

    }

    function checkOut() {

    }

    return {
        items, itemCount
    }

}