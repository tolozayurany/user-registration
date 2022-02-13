import { useForm } from '../../hooks/useForm';
import './InformationForm.scss';

const initialForm = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
};
const validationsForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.name.trim()) {
        errors.name = "*Ingresa tu nombre para continuar.";
    }
    if (!form.lastName.trim()) {
        errors.lastName = "*Ingresa tu apellido para continuar.";
    }
    if (!form.email.trim()) {
        errors.email = "*Ingresa tu correo para continuar.";
    } else if (!regexEmail.test(form.email.trim())){
        errors.email= "*Ingresa un correo válido."
    }
    if (!form.phone.trim()) {
        errors.phone = "*El número de celular debe ser colombiano y de 10 dígitos.";
    } else if (form.phone.length != 10 ){
        errors.phone = "*El número de celular debe ser de 10 dígitos.";
    }
    if (!form.city.trim()) {
        errors.city = "*Por favor ingresa una ciudad valida.";
    }
    if (!form.address.trim()) {
        errors.address = "*Ingresa una dirección de recogida.";
    }
    
    return errors;
};

function InformationForm() {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleClick,
        handleSubmit,
    } = useForm(initialForm, validationsForm);
    return (
        <section className='content__inputs'>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Nombre </label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Juan'
                        onChange={handleChange}
                        value={form.name}
                        required
                    />
                    {errors.name&&<p>{errors.name}</p>}
                </div>
                <div className='information__input'>
                    <label > Apellido </label>
                    <input type="text"
                        name='lastName'
                        placeholder='Mantilla'
                        onChange={handleChange}
                        value={form.lastName}
                        required
                    />
                    {errors.lastName&&<p>{errors.lastName}</p>}
                </div>
            </div>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Correo </label>
                    <input type="email"
                        name='email'
                        placeholder='juanm@mipaquete.com'
                        onChange={handleChange}
                        value={form.email}
                        required
                    />
                    {errors.email&&<p>{errors.email}</p>}
                </div>
                <div className='information__input'>
                    <label > Celular </label>
                    <input
                        type="number"
                        placeholder='3150128510'
                        name='phone'
                        onChange={handleChange}
                        value={form.phone}
                    />
                    {errors.phone&&<p>{errors.phone}</p>}
                </div>
            </div>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Ciudad </label>
                    <input type="text"
                        placeholder='MEDELLÍN'
                        name='city'
                        onChange={handleChange}
                        value={form.city}
                    />
                    {errors.city&&<p>{errors.city}</p>}
                </div>
                <div className='information__input'>
                    <label > Dirección de recogida </label>
                    <input type="text"
                        placeholder='Carrera 3 # 5 - 40'
                        name='address'
                        onChange={handleChange}
                        value={form.address}
                    />
                    {errors.address&&<p>{errors.address}</p>}
                </div>
            </div>
            <button onClick={handleClick}>
                    holakease
            </button>
        </section>
    );
}

export default InformationForm;
