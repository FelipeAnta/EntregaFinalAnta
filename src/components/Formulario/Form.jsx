import { useState } from 'react';
import './Form.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { Alert } from 'react-bootstrap';
const Form = ({ formData, handleOnChange, errors, validateForm, setFormData, cartList, totalPrice }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { vaciarCarrito } = useCartContext()
  const [orderId, setOrderId] = useState('');
  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      const order = {
        buyer: formData,
        items: cartList.map(({ name, id, price, cantidad }) => ({ id, name, price, cantidad })),
        total: totalPrice
      };

      const dbFirestore = getFirestore();
      const ordersCollection = collection(dbFirestore, 'orders');


      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);

      setFormData({
        name: '',
        email: '',
        repeatEmail: '',
        phone: '',
        message: ''
      });
      setOrderPlaced(true);
    }
  };

  const handleBackToList = () => {
    setOrderPlaced(false);
    vaciarCarrito();
  };

  return (
    <div>
      {orderPlaced ? (
        <div className='order-section'>
          <div className='order-section mt-5'>
          <Link to={'/'} className="btn btn-outline-success" onClick={handleBackToList}>Quiero seguir comprando</Link>
            <Alert variant='danger' className='mt-3 w-75 text-center'>*El carrito de arriba corresponde a tu último pedido. Para continuar comprando, presiona "Quiero seguir comprando" o "Vaciar tu carrito". Agradecemos tu atención.*</Alert>
            <Alert variant='success' className='mt-5'>Orden generada con ID: {orderId}</Alert>
          </div>
          <p className="order-success">Orden exitosa</p>
        </div>
      ) : (
        <form onSubmit={handleOnSubmit} className="form-container">
          <div className="form-section">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" placeholder="Ingrese el nombre" onChange={handleOnChange} value={formData.name} />
            {errors && errors.name && <span>{errors.name}</span>}
          </div>
          <div className="form-section">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" placeholder="Ingrese el email" onChange={handleOnChange} value={formData.email} />
            {errors && errors.email && <span>{errors.email}</span>}
          </div>
          <div className="form-section">
            <label htmlFor="repeatEmail">Repetir email:</label>
            <input
              type="text"
              name="repeatEmail"
              placeholder="Repita el email"
              onChange={handleOnChange}
              value={formData.repeatEmail}
            />
            {errors && errors.repeatEmail && <span>{errors.repeatEmail}</span>}
          </div>
          <div className="form-section">
            <label htmlFor="phone">Teléfono:</label>
            <input type="text" name="phone" placeholder="Ingrese el teléfono" onChange={handleOnChange} value={formData.phone} />
            {errors && errors.phone && <span>{errors.phone}</span>}
          </div>
          <div className="form-section">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea type="text" name="message" placeholder="Deje un mensaje (opcional)" onChange={handleOnChange} value={formData.message} rows="5" cols="30" />
            {errors && errors.message && <span>{errors.message}</span>}
          </div>
          <button className="btn btn-outline-success submit-button">Generar orden</button>
        </form>
      )}
    </div>
  );
};

export default Form;