import { useState } from 'react';
import './Form.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
const Form = ({formData, handleOnChange, errors, validateForm, setFormData, cartList, totalPrice}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      try {
        const order = {}
        order.buyer =formData
        order.items = cartList.map(({ name, id, price, cantidad }) => ({ id, name, price, cantidad }))
        order.total = totalPrice;
  
        const dbFirestore = getFirestore();
        const ordersCollection = collection(dbFirestore, 'orders');
  
        const docRef = await addDoc(ordersCollection, order);
        console.log('Orden generada con ID:', docRef.id);
        
        // Limpia los campos del formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        setOrderPlaced(true);
      } catch (error) {
        console.error('Error al generar la orden:', error);
      }
    }
  };
    return (
      <div>
        {orderPlaced && <p className="order-success">Orden exitosa</p>}
        <form onSubmit={handleOnSubmit} className="form-container">
          <div className="form-section">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" placeholder='ingrese el nombre' onChange={handleOnChange} value={formData.name}/>
            {errors && errors.name && <span>{errors.name}</span>}
          
          </div>
          <div className="form-section">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" placeholder='ingrese el email' onChange={handleOnChange} value={formData.email}/>
            {errors && errors.email && <span>{errors.email}</span>}
          </div>
          <div className="form-section">
            <label htmlFor="phone">Teléfono:</label>
            <input type="text" name="phone" placeholder='ingrese el telefono' onChange={handleOnChange} value={formData.phone}/>
            {errors && errors.phone && <span>{errors.phone}</span>}
          </div>
          <div className="form-section">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea type="text" name="message" placeholder='Deje un mensaje (opcional)' onChange={handleOnChange} value={formData.message} rows="5" cols="30"/>
            {errors && errors.message && <span>{errors.message}</span>}
          </div>
            <button className="btn btn-outline-success submit-button">Generar orden</button>
        </form>
      </div>
  )
}

export default Form