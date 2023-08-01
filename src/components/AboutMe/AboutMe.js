import './AboutMe.css';
import MyPhoto from '../../images/me.jpeg';

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__wrapper'>
                <div className='about-me__info'>
                    <h3 className='about-me__info-name'>Даниил</h3>
                    <p className='about-me__info-prof'>Фронтенд-разработчик, 26 лет</p>
                    <p className='about-me__info-description'>Я живу в Санкт-Петербурге, закончил факультет экономики СПБГАСУ. Сейчас работаю менеджером в ресторане. У меня есть жена.
                        Мое хобби - разработка и производство униформы для сферы услуг. Недавно начал кодить. Мечтаю, после обучения найти работу в IT компании, чтобы еще больше погрузиться в эту сферу и иметь возможность работать удаленно.</p>
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://github.com/dlmedv'
                        className='about-me__info-link'>GitHub</a>
                </div>
                <img className='about-me__photo' src={MyPhoto} alt='мое фото' />
            </div>
        </section>
    )
}

export default AboutMe;