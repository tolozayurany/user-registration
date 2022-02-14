import { useState } from "react";

const PasswordForm = ({
    form,
    errors,
    handleChange,
    handleBlur,
}) => {
    const [showPass, setShowPass] = useState(false);
    return (
        <section className='content__inputs'>
            <div className='information__input--display'>
                <div className='information__input'>
                    <label > Contraseña  </label>
                    <input
                        className={errors.password ? 'error-input' : null}
                        type={showPass ? 'text' : 'password'}
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.password}
                    />
                    <button onClick={() => setShowPass(!showPass)}>mostrar</button>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='information__input'>
                    <label>Confirma tu contraseña</label>
                    <input
                        className={errors.confirmPassword ? 'error-input' : null}
                        type={showPass ? 'text' : 'password'}
                        placeholder='Andra S.A'
                        name='confirmPassword'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={form.confirmPassword}
                    />
                    <button onClick={() => setShowPass(!showPass)}>mostrar</button>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
            </div>
            <div className='button-continue__section'>
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
export default PasswordForm;
