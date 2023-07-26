import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search-form">
            <form className='search-form__form'>
                <input
                    type="text"
                    placeholder='Фильм'
                    className='search-form__input'
                    minLength='2'
                    maxLength='30'
                    required
                />
                <button
                    type='submite'
                    className='search-form__button'>Найти</button>
            </form>
        </section>
    )
}

export default SearchForm;