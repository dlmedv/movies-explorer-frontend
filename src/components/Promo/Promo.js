import './Promo.css';
import image from '../../images/image1.svg';

function Promo() {
    return (
        <section className='promo'>
            <h1 className='promo__title' >Учебный проект студента факультета Веб-разработки.</h1>
            <img className='promo__image' src={image} alt='абстрактная картинка' />
        </section>
    )
}

export default Promo;