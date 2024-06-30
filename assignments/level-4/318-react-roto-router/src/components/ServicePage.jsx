import { useParams } from "react-router-dom"

export default function ServicePage(){

  const params = useParams()
  return(
    <div>
      <h1>Service Page {params.serviceId}</h1>
    </div>
  )
}