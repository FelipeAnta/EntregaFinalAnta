import './Form'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
const Form = ({formData, handleOnChange, errors, validateForm, setFormData, cartList, totalPrice}) => {
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
      } catch (error) {
        console.error('Error al generar la orden:', error);
      }
    }
  };
    return (
      <div>
        <form onSubmit={handleOnSubmit} className="form-container">
          <div className="form-section">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" placeholder='ingrese el nombre' onChange={handleOnChange} value={formData.name}/>
            <br />
            {errors && errors.name && <span>{errors.name}</span>}
            <br />
          </div>
          <div className="form-section">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" placeholder='ingrese el email' onChange={handleOnChange} value={formData.email}/>
            <br />
            {errors && errors.email && <span>{errors.email}</span>}
            <br />
          </div>
          <div className="form-section">
            <label htmlFor="phone">Teléfono:</label>
            <input type="text" name="phone" placeholder='ingrese el telefono' onChange={handleOnChange} value={formData.phone}/>
            <br />
            {errors && errors.phone && <span>{errors.phone}</span>}
            <br />
          </div>
          <div className="form-section">
            <br/>
            <label htmlFor="mensaje">Mensaje:</label>
            <input type="text" name="message" placeholder='Deje un mensaje' onChange={handleOnChange} value={formData.message}/>
            <br />
            {errors && errors.message && <span>{errors.message}</span>}
            <br />
          </div>
            <button className="btn btn-outline-success submit-button">Generar orden</button>
        </form>
      </div>
  )
}

export default Form