import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import InitialForm from '../InitialForm/InitialForm';
import SecondForm from '../SecondForm/SecondForm';
import PasswordForm from '../PasswordForm/PasswordForm';
import './CreateAccount.scss';

const defaultForm = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    documentType:"",
    idUser:"",
    typeUser:"",
    shipments:"",
    commercialName:"",
    businessName:"",
    password:"",
    confirmPassword:"",
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
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "*Ingresa un correo válido."
    }
    if (!form.phone.trim()) {
        errors.phone = "*El número de celular debe ser colombiano y de 10 dígitos.";
    } else if (form.phone.length !== 10) {
        errors.phone = "*El número de celular debe ser de 10 dígitos.";
    }
    if (!form.city.trim()) {
        errors.city = "*Por favor ingresa una ciudad valida.";
    }
    if (!form.address.trim()) {
        errors.address = "*Ingresa una dirección de recogida.";
    }
    if (!form.documentType.trim()) {
        errors.documentType = "*Selecciona tu tipo de documento.";
    }
    if (!form.shipments.trim()) {
        errors.shipments = "*Debes elegir uno de los datos de la lista.";
    }
    if (!form.idUser.trim()) {
        errors.idUser = "*Ingresa tu número de documento para continuar.";
    }
    if (!form.password.trim()) {
        errors.password = "*Recuerda que tu contraseña debe contener: Mínimo 8 caracteres que incluyan números y letras.";
    }
    if (form.confirmPassword !== form.password) {
        errors.confirmPassword = "*Las contraseñas deben coincidir.";
    }
   
    return errors;
};

function CreateAccount() {

    const {
        form,
        errors,
        handleChange,
        handleBlur,
    } = useForm(defaultForm, validationsForm);

    const components = {
        form: 'initialForm',
    };

    const [showComponent, setShowComponent] = useState(components);

    const backComponents = () => {
        if(showComponent.form === 'passwordForm'){
            setShowComponent({...showComponent, form:'secondForm'})
        } else
        if(showComponent.form === 'secondForm'){
            setShowComponent({...showComponent, form:'initialForm'})
        }
    };

    return (
        <section className="create-account">
            <section className='create-account__section'>
                <div className='content__header'>
                    <div>
                        <button onClick={backComponents}
                        >back</button>
                        <p>Diligencia tus datos</p>
                    </div>
                    <p>Todos los campos son obligatorios</p>
                </div>
                { showComponent.form ==='initialForm' ?
                <InitialForm
                setShowComponent={setShowComponent}
                showComponent={showComponent}
                validationsForm={validationsForm}
                defaultForm={defaultForm}
                form={form}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                />
                : 
                showComponent.form ==='secondForm' ?
                <SecondForm
                setShowComponent={setShowComponent}
                showComponent={showComponent}
                validationsForm={validationsForm}
                defaultForm={defaultForm}
                form={form}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                /> 
                : 
                showComponent.form ==='passwordForm' ?
                <PasswordForm
                setShowComponent={setShowComponent}
                showComponent={showComponent}
                validationsForm={validationsForm}
                defaultForm={defaultForm}
                form={form}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                /> 
                : ''
                }
            </section>
        </section>
    );
}

export default CreateAccount;
