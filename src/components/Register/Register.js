import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <main>
            <section className='auth'>
                <Link to='/'>
                    <img className='auth__logo' src={logo} alt='логотип' />
                </Link>
                <h2 className='auth__title'>Добро пожаловать!</h2>
                <form className='auth__form'>
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>Имя</label>
                        <input className='auth__form-input'
                            type="text"
                            defaultValue="Даниил"
                            placeholder='Введите ваше имя'
                            minLength='2'
                            maxLength='30'
                            required
                        />
                    </div>
                    <span className='auth__form-error'></span>
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>E-mail</label>
                        <input className='auth__form-input'
                            type="email"
                            minLength='5'
                            maxLength='30'
                            required
                            defaultValue="dlmedovnik@mail.ru"
                            placeholder='Введите ваш e-mail'
                        />
                    </div>
                    <span className='auth__form-error'></span>
                    <div className='auth__form-wrapper'>
                        <label className='auth__form-label'>Пароль</label>
                        <input className='auth__form-input'
                            type="password"
                            minLength='8'
                            maxLength='30'
                            required
                            placeholder='Введите ваш пароль'
                        />
                    </div>
                    <span className='auth__form-error'>Что-то пошло не так...</span>
                </form>
                <button className='auth__button' type='submite'>Зарегистрироваться</button>
                <div className='auth__question-wrapper'>
                    <p className='auth__question'> Уже зарегистрированы?</p>
                    <Link to='/signin' className='auth__question auth__question_link'>Войти</Link>
                </div>

            </section>
        </main>
    )
}

export default Register;