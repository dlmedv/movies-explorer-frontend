import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li>
                    <a
                        className='portfolio__link'
                        href='https://github.com/dlmedv/how-to-learn'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className='portfolio__text'>Статичный сайт</p>
                        <div className='portfolio__icon'></div>
                    </a>
                </li>
                <li>
                    <a
                        className='portfolio__link'
                        href='https://github.com/dlmedv/russian-travel'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className='portfolio__text'>Адаптивный сайт</p>
                        <div className='portfolio__icon'></div>
                    </a>
                </li>
                <li>
                    <a
                        className='portfolio__link'
                        href='https://github.com/dlmedv/react-mesto-api-full-gha'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className='portfolio__text'>Одностраничное приложение</p>
                        <div className='portfolio__icon'></div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;