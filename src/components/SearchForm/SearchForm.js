import './SearchForm.css';

function SearchForm() {
    return (
        <div className="search-form">
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
                    type='submit'
                    className='search-form__button'>Найти</button>
            </form>
        </div>
    )
}

export default SearchForm;