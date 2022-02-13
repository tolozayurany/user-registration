import { useState } from 'react';
import InformationForm from '../InformationForm/InformationForm';
import './CreateAccount.scss';

function CreateAccount() {
    return (
        <section className="create-account">
            <section className='create-account__section'>
                <div className='create-account__content'>
                    <div className='content__header'>
                        <div>
                            <button>back</button>
                            <p>Diligencia tus datos</p>
                        </div>
                        <p>Todos los campos son obligatorios</p>
                    </div>
                    <InformationForm />
                    <div className='button-continue__section'>
                        <button className='button'>Cancelar</button>
                        <button className='button'>Continuar</button>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default CreateAccount;
