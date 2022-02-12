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
                    <div className='content__inputs'>
                        <div className='information__input--display'>
                            <div className='information__input'>
                                <label > Nombre </label>
                                <input type="text" placeholder='Juan' />
                            </div>
                            <div className='information__input'>
                                <label > Apellido </label>
                                <input type="text" placeholder='Mantilla' />
                            </div>
                        </div>
                        <div className='information__input--display'>
                            <div className='information__input'>
                                <label > Correo </label>
                                <input type="text" placeholder='Juan' />
                            </div>
                            <div className='information__input'>
                                <label > Celular </label>
                                <input type="text" placeholder='Mantilla' />
                            </div>
                        </div>
                        <div className='information__input--display'>
                            <div className='information__input'>
                                <label > Ciudad </label>
                                <input type="text" placeholder='Juan' />
                            </div>
                            <div className='information__input'>
                                <label > Dirección de recogida </label>
                                <input type="text" placeholder='Mantilla' />
                            </div>
                        </div>
                    </div>
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
