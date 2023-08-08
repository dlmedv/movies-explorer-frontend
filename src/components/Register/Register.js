import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useForm from '../hooks/useForm';
import { useState, useEffect } from 'react';
import { patternEmail } from '../../utils/constants';

function Register({ registerUser, registerError, cleaner }) {
    const [buttonStatus, setButtonStatus] = useState(false);
    const { form, errors, handleChange } = useForm({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        cleaner()
    }, []);

    useEffect(() => {
        const err = errors.name === '' && errors.email === '' && errors.password === ''
        setButtonStatus(err)
    }, [errors]);


    const handleSubmit = (evt) => {
        evt.preventDefault()
        registerUser(form)
        cleaner()
    };

    return (
        <main>
            <section className='auth'>
                <Link to='/'>
                    <img className='auth__logo' src={logo} alt='логотип' />
                </Link>
                <h1 className='auth__title'>Добро пожаловать!</h1>
                <form className='auth__form'
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>Имя</label>
                        <input className='auth__form-input'
                            type="text"
                            id="name-input"
                            name='name'
                            // defaultValue="Даниил"
                            placeholder='Введите ваше имя'
                            minLength='2'
                            maxLength='30'
                            onChange={handleChange}
                            value={form.name}
                            required
                        />
                    </div>
                    <span className='auth__form-error'>{errors.name}</span>
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>E-mail</label>
                        <input className='auth__form-input'
                            type="email"
                            id="email-input"
                            name='email'
                            minLength='5'
                            maxLength='30'
                            onChange={handleChange}
                            value={form.email}
                            required
                            pattern={patternEmail}
                            // defaultValue="dlmedovnik@mail.ru"
                            placeholder='Введите ваш e-mail'
                        />
                    </div>
                    <span className='auth__form-error'>{errors.email}</span>
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>Пароль</label>
                        <input className='auth__form-input'
                            type="password"
                            id='auth-input'
                            name='password'
                            minLength='8'
                            maxLength='30'
                            onChange={handleChange}
                            value={form.password}
                            required
                            autoComplete='on'
                            placeholder='Введите ваш пароль'
                        />
                    </div>
                    <span className='auth__form-error'>{errors.password}</span>
                    <span className='auth__form-error auth__form-error_reg'>{registerError}</span>
                    <button
                        className={buttonStatus ? 'auth__button' : 'auth__button auth__button_disabled'}
                        type='submit'
                        disabled={!buttonStatus}
                    >Зарегистрироваться</button>
                </form>
                <div className='auth__question-wrapper'>
                    <p className='auth__question'> Уже зарегистрированы?</p>
                    <Link to='/signin' className='auth__question auth__question_link'>Войти</Link>
                </div>

            </section>
        </main>
    )
}

export default Register;