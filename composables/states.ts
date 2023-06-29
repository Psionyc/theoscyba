export const useOverlay = () => {

    const overlay = useState<boolean>("overlay", () => false)

    const setOverlay = (value: boolean) => {
        overlay.value = value
    }

    return {
        overlay, setOverlay
    }

}
export const useRegistration = () => {
    const registration = useState<boolean>("registration", () => false)

    const setRegistration = (value: boolean) => {
        registration.value = value
    }

    return {
        registration, setRegistration
    }
}