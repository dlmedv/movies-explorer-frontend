import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <main>
        <section className='profile'>
            <div className='profile__wrapper'>
                <h1 className='profile__title'>Привет, Даниил!</h1>
                <form className='profile__form'>
                    <div className='profile__form-row'>
                        <label className='profile__label'>Имя</label>
                        <input className='profile__input'
                            type="text"
                            minLength='2'
                            maxLength='30'
                            placeholder='Имя'
                            required
                            defaultValue="Даниил"
                        />
                    </div>
                    <span className="profile__error-text"></span>
                    <div className='profile__form-row'>
                        <label className='profile__label'>E-mail</label>
                        <input className='profile__input'
                            type="email"
                            minLength='5'
                            maxLength='30'
                            placeholder='E-mail'
                            required
                            defaultValue="dlmdv@mail.ru"
                        />
                    </div>
                    <span className="profile__error-text"></span>
                    <div className='profile__buttons'>
                    <button className='profile__button' type='button'>Редактировать</button>
                    <Link to="/" className='profile__button profile__button_red'>Выйти из аккаунта</Link>
                </div>
                </form>
            </div>
        </section>
        </main>
    )
}

export default Profile;



