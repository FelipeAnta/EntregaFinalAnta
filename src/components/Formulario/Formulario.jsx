import React, { useState } from 'react'
import Form from './Form'
import { formWhitValidation } from './formWhitValidation'




const FormWhitValidation = formWhitValidation(Form)

const Formulario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    })
    const handleOnChange = (evt) =>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    return (   
        <FormWhitValidation formData={formData} handleOnChange={handleOnChange}/>     
  )
}

export default Formulario