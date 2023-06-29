export const useModals = () => {
   const { setOverlay } = useOverlay()
   const { setRegistration } = useRegistration()

   const openRegistration = () => {
      setRegistration(true)
      setOverlay(true)
   }

   const closeRegistration = () => {
      setRegistration(false)
      setOverlay(false)
   }

   return {
      openRegistration,
      closeRegistration,
   }
}