import { useParams, Navigate, useNavigate } from 'react-router-dom'

export default function Post() {
   const params = useParams()

   //place this declaration as top level as possible
   const navigateFn = useNavigate()

   if (params.status == 404) {
      return <Navigate to="/NotFound" />
   }
   /*
   // Dosent work
    function onClick() {
      console.log('clicked')
      return <Navigate to="/NotFound" />
   } */

   function onClick() {
      console.log('clicked')
      navigateFn('/')
   }

   return (
      <>
         <h2 style={{ color: 'white' }}>
            Get the POST data for the id: {params.id}
         </h2>

         <button onClick={onClick}>Click</button>
      </>
   )
}
