import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search-form">
            <form className='search-form__form'>
                <input
                    type="text"
                    placeholder='Фильм'
                    required
                    className='search-form__input' />
                <button
                    type='submite'
                    className='search-form__button'>Найти</button>
            </form>
        </section>
    )
}

export default SearchForm;