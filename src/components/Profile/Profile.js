import './Profile.css';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js'
import { patternEmail } from '../../utils/constants';

function Profile({ profileUser, profileError, profileSuccess, logOut, cleaner }) {
    const { currentUser } = useContext(CurrentUserContext);
    const [buttonStatus, setButtonStatus] = useState(true);
    const [changeButton, setChangeButton] = useState(false)
    const { form, errors, handleChange } = useForm({
        name: currentUser.name,
        email: currentUser.email,
    })

    useEffect(() => {
        cleaner()
    }, [])

    useEffect(() => {
        const err = errors.name === '' && errors.email === ''
        setButtonStatus(!err)
    }, [errors])

    useEffect(() => {
        const err = form.name !== currentUser.name || form.email !== currentUser.email
        setButtonStatus(!err)
    }, [form])

    const handleClickEditButton = (evt) => {
        evt.preventDefault();
        setChangeButton(true);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        profileUser(form)
        setChangeButton(false)
        cleaner()
    }

    const handleLogOut = () => {
        logOut()
    }

    return (
        <main>
            <section className='profile'>
                <div className='profile__wrapper'>
                    <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                    <form className='profile__form'
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className='profile__form-row'>
                            <label className='profile__label'>Имя</label>
                            <input className='profile__input'
                                id='name-input'
                                type="text"
                                name='name'
                                minLength='2'
                                maxLength='30'
                                placeholder='Имя'
                                required
                                value={form.name}
                                onChange={handleChange}
                                disabled={!changeButton}
                            />
                        </div>
                        <span className="profile__error-text">{errors.name}</span>
                        <div className='profile__form-row'>
                            <label className='profile__label'>E-mail</label>
                            <input className='profile__input'
                                id='email-input'
                                type="email"
                                name='email'
                                minLength='5'
                                maxLength='30'
                                placeholder='E-mail'
                                required
                                value={form.email}
                                onChange={handleChange}
                                disabled={!changeButton}
                                pattern={patternEmail}
                            />
                        </div>
                        <span className="profile__error-text">{errors.email}</span>
                        <div className='profile__buttons'>
                            <span className="profile__error-text profile__error-text_server">{profileError}</span>
                            <span className="profile__error-text profile__error-text_success">{profileSuccess}</span>
                            {changeButton ?
                                (<button
                                    disabled={buttonStatus}
                                    className='profile__button profile__button_disabled'
                                    onClick={handleSubmit}
                                    type='submit'>
                                    Сохранить
                                </button>)
                                :
                                (<button
                                    className='profile__button'
                                    onClick={handleClickEditButton}
                                    type='button'>
                                    Редактировать
                                </button>)}
                            <Link to="/"
                                className='profile__button profile__button_red'
                                onClick={handleLogOut}
                            >Выйти из аккаунта</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    )
}

export default Profile;



