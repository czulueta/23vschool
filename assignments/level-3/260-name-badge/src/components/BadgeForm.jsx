

export default function BadgeForm({handleClick, inputs, handleSubmit}){
  return(
    <div className="badge-form-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="firstName"
          value={inputs.firstName}
          placeholder="First Name"
          onChange={handleClick} 
        />
        <input 
          type="text"
          name="lastName"
          value={inputs.lastName}
          placeholder="Last Name"
          onChange={handleClick} 
        />
        <input 
          type="email"
          name="email"
          value={inputs.email}
          placeholder="Email"
          onChange={handleClick} 
        />
        <input 
          type="text"
          name="placeOfBirth"
          value={inputs.placeOfBirth}
          placeholder="Place of Birth"
          onChange={handleClick} 
        />
        <input 
          type="number"
          name="phone"
          value={inputs.phone}
          placeholder="Phone Number"
          onChange={handleClick} 
        />
        <input 
          type="text"
          name="favFood"
          value={inputs.favFood}
          placeholder="Favorite Food"
          onChange={handleClick} 
        />
        <textarea 
          name="comments"
          value={inputs.comments}
          placeholder="Comments"
          onChange={handleClick}></textarea>
        <button>Submit</button>

      </form>
    </div>
  )
}