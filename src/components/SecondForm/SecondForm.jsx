import './SecondForm.scss';

const SecondForm = ({
    form,
    errors,
    handleChange,
    handleBlur,
}) => {
    return (
        <section className='content__inputs'>
            {
                form.typeUser === 'personaJuridica' ?
                    <div className='information__input--display'>
                        <div className='information__input'>
                            <label > Número de identificación </label>
                            <input
                                className={errors.idUser ? 'error-input' : null}
                                type="number"
                                name='idUser'
                                placeholder='1234567895'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.idUser}
                                required
                            />
                            {errors.idUser && <p>{errors.idUser}</p>}
                        </div>

                        <div className='information__input'>
                            <label > Razón social </label>
                            <input
                                className={errors.businessName ? 'error-input' : null}
                                type="text"
                                name='businessName'
                                placeholder='1234567895'
                                onChange={handleChange}
                                value={form.businessName}
                            />
                        </div>
                    </div>

                    :

                    <div className='information__input--display'>
                        <div className='information__input'>
                            <label > Tipo de documento </label>
                            <select
                                className={errors.documentType ? 'error-input' : null}
                                type="select"
                                name='documentType'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.documentType}
                                required
                            >
                                <option value="NIT">NIT</option>
                                <option value="CC">Cédula de ciudadanía</option>
                                <option value="TI">Tarjeta de identidad</option>
                                <option value="PS">Pasaporte</option>
                                <option value="CE">Cédula de extranjería</option>
                            </select>
                            {errors.documentType && <p>{errors.documentType}</p>}

                        </div>

                        <div className='information__input'>
                            <label > Número de identificación </label>
                            <input
                                className={errors.idUser ? 'error-input' : null}
                                type="number"
                                name='idUser'
                                placeholder='1234567895'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.idUser}
                                required
                            />
                            {errors.idUser && <p>{errors.idUser}</p>}
                        </div>
                    </div>
            }
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Tipo de persona </label>
                    <input
                        className='type-user__input'
                        type="radio"
                        name='typeUser'
                        onChange={handleChange}
                        value="personaNatural"
                    />
                    <span>Persona Natural</span>
                    <input
                        className='type-user__input'
                        type="radio"
                        name='typeUser'
                        onChange={handleChange}
                        value="personaJuridica"
                    />
                    <span>Persona Jurídica</span>
                </div>
                <div className='information__input'>
                    <label > Nombre comercial </label>
                    <input
                        className={errors.commercialName ? 'error-input' : null}
                        type="text"
                        placeholder='Andra S.A'
                        name='commercialName'
                        onChange={handleChange}
                        value={form.commercialName}
                    />
                </div>
            </div>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Envíos al mes </label>
                    <select
                        className={errors.shipments ? 'error-input' : null}
                        type="text"
                        name='shipments'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.shipments}
                    >
                        <option value="1-30">1 a 30 envíos</option>
                        <option value="30-200">30 a 200 envíos</option>
                        <option value="200-500">200 a 500 envíos</option>
                        <option value="500-5000">500 a 5.000 envíos</option>
                        <option value="+5000">Más de 5.000 envíos</option>
                    </select>
                    {errors.shipments && <p>{errors.shipments}</p>}

                </div>
            </div>
            <div className='button-continue__section'>
                <button className='button button--white'>Cancelar</button>
                <button className='button button--blue' /* onClick={() => {
                    if (Object.keys(errors).length === 0) {
                        setShowComponent(true)
                    } else {
                        setShowComponent(false)
                    }
                }
                } */>
                    Continuar
                </button>
            </div>
        </section>
    )
}
export default SecondForm;
