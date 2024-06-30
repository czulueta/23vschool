import { Link } from "react-router-dom"



export default function Services(){

  const services = [
    {
      id: 1,
      job: "unclogging pipes",
    },
    {
      id: 2,
      job: "installing sinks",
    },
    {
      id: 3,
      job: "installing bath tubs",
    }
  ]

  const list = services.map((service) => (
    
     <Link key={service.id} to={`/services/${service.id}`} >
        <h1>
        {service.job}
        </h1>
       
     </Link>
    
  ))
  return(
    <div>
      
      <h1>Services Component</h1>
      {list}
      
    </div>
  )
}