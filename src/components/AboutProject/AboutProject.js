import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__title'>О&nbsp;проекте</h2>
            <ul className='about-project__list'>
                <li className='about-project__list-description'>
                    <h3 className='about-project__list-title'>Дипломный проект включал 5&nbsp;этапов</h3>
                    <p className='about-project__list-text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
                    </p>
                </li>
                <li className='about-project__list-description'>
                    <h3 className='about-project__list-title'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
                    <p className='about-project__list-text'>
                    У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <div className='about-project__steps'>
                <p className='about-project__week '>1 неделя</p>
                <p className='about-project__week about-project__week_gray'>4 недели</p>
                <p className='about-project__week-signature'>Back-end</p>
                <p className='about-project__week-signature'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;