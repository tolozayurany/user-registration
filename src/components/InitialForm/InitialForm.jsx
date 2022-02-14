import './InitialForm.scss';

const InitialForm = ({
    setShowComponent,
    form,
    errors,
    handleChange,
    handleBlur,
}) => {
    return (
        <section className='content__inputs'>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Nombre </label>
                    <input
                        className={errors.name ? 'error-input' : null}
                        type="text"
                        name='name'
                        placeholder='Juan'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.name}
                        required
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='information__input'>
                    <label > Apellido </label>
                    <input
                        className={errors.lastName ? 'error-input' : null}
                        type="text"
                        name='lastName'
                        placeholder='Mantilla'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.lastName}
                        required
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
            </div>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Correo </label>
                    <input
                        className={errors.email ? 'error-input' : null}
                        type="email"
                        name='email'
                        placeholder='juanm@mipaquete.com'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.email}
                        required
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='information__input'>
                    <label > Celular </label>
                    <input
                        className={errors.phone ? 'error-input' : null}
                        type="number"
                        placeholder='3150128510'
                        name='phone'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.phone}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
            </div>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Ciudad </label>
                    <input
                        className={errors.city ? 'error-input' : null}
                        type="text"
                        placeholder='MEDELLÍN'
                        name='city'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.city}
                    />
                    {errors.city && <p>{errors.city}</p>}
                </div>
                <div className='information__input'>
                    <label > Dirección de recogida </label>
                    <input
                        className={errors.address ? 'error-input' : null}
                        type="text"
                        placeholder='Carrera 3 # 5 - 40'
                        name='address'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.address}
                    />
                    {errors.address && <p>{errors.address}</p>}
                </div>
            </div>
            <div className='button-continue__section'>
                <button className='button button--white'>Cancelar</button>
                <button className='button button--blue' onClick={() => {
                    if (Object.keys(errors).length === 3) {
                        setShowComponent(true)
                    } else {
                        setShowComponent(false)
                    }
                }
                }>
                    Continuar
                </button>
            </div>
        </section>
    );
}

export default InitialForm;
