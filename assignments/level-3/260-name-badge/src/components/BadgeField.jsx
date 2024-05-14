

export default function BadgeField({badges}) {
  console.log(badges)
  
  return(
    <div>
    {badges.map((badge, index) => {
        return (
          <div key={index}> 
            <h2>{badge.firstName}</h2>
            <h2>{badge.lastName}</h2>
            <h2>{badge.phone}</h2>
            <h2>{badge.email}</h2>
            <h2>{badge.favFood}</h2>
            <h2>{badge.placeOfBirth}</h2>

          </div>
        )
      })}
    </div>
  )
}