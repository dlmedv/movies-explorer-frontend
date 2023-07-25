import './AboutProject.css';

 function AboutProject() {
    return (
        <section className='about-project'>
            <h1 className='about-project__title'>О&nbsp;проекте</h1>
<ul className='about-project__list'>
    <li>
        <h2 className='about-project__list-title'>Дипломный проект включал 5 этапов</h2>
        <p className='about-project__list-text'>
        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
    </li>
    <li className='about-project__list-title'>
    <h2 className='about-project__list-title'>На выполнение диплома ушло 5 недель</h2>
    <p className='about-project__list-text'>
    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
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