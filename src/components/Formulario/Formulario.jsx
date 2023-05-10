import React, { useState } from 'react'
import Form from './Form'
import { formWhitValidation } from './formWhitValidation'




const FormWhitValidation = formWhitValidation(Form)

const Formulario = ({ cartList, totalPrice }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const handleOnChange = (evt) =>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    
    return (   
        <div>
            <FormWhitValidation formData={formData} handleOnChange={handleOnChange} setFormData={setFormData} cartList={cartList} totalPrice={totalPrice}/>    
        </div>
  )
}

export default Formulario