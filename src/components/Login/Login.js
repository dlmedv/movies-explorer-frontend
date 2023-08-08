import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useForm from '../hooks/useForm';
import { useState, useEffect } from 'react';
import { patternEmail } from '../../utils/constants';

function Login({ loginUser, loginError, cleaner }) {

    const [buttonStatus, setButtonStatus] = useState(false);

    const { form, errors, handleChange } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        cleaner()
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        cleaner()
        loginUser(form)
    };

    useEffect(() => {
        const err = errors.email === '' && errors.password === ''
        setButtonStatus(err)
    }, [errors]);

    return (
        <main>
            <section className='auth'>
                <Link to='/'>
                    <img className='auth__logo' src={logo} alt='логотип' />
                </Link>
                <h1 className='auth__title'>Рады видеть!</h1>
                <form
                    className='auth__form'
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>E-mail</label>
                        <input className='auth__form-input'
                            type="email"
                            minLength='5'
                            maxLength='30'
                            required
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder='Введите ваш e-mail'
                            pattern={patternEmail}
                        />
                    </div>
                    <span className='auth__form-error'>{errors.email}</span>
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>Пароль</label>
                        <input className='auth__form-input'
                            type="password"
                            minLength='8'
                            maxLength='30'
                            required
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder='Введите ваш пароль'
                            autoComplete='on'
                        />
                    </div>
                    <span className='auth__form-error'>{errors.password}</span>
                    <span className='auth__form-error auth__form-error_log'>{loginError}</span>
                    <button
                        className={buttonStatus ? 'auth__button auth__button_margin' : 'auth__button auth__button_margin auth__button_disabled'}
                        type='submit'
                        disabled={!buttonStatus}
                    >Войти</button>
                </form>
                <div className='auth__question-wrapper'>
                    <p className='auth__question'>Ещё не зарегистрированы?</p>
                    <Link to='/signup' className='auth__question auth__question_link'>Регистрация</Link>
                </div>
            </section>
        </main>
    )
}

export default Login;