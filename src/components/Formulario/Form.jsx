
const Form = ({formData, handleOnChange, errors, validateForm}) => {
    const handleOnsubmit =(evt) =>{
      evt.preventDefault()
      if (validateForm()) {
        console.log('enviando',formData)
      }
    }
    return (
      <div>
        <form onSubmit={handleOnsubmit}>
            <input type="text" name="name" placeholder='ingrese el nombre' onChange={handleOnChange} value={formData.name}/>
            <br />
            {errors && errors.name && <span>{errors.name}</span>}
            <br />
            <input type="text" name="email" placeholder='ingrese el email' onChange={handleOnChange} value={formData.email}/>
            <br />
            {errors && errors.email && <span>{errors.email}</span>}
            <br />
            <button>Enviar</button>
        </form>
      </div>
  )
}

export default Form