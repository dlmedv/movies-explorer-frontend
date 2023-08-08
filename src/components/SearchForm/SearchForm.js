import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ value, short, onChange, onShortChange, onSearch }) {

    const onSubmit = (event) => {
        event.preventDefault();
            onSearch();
    };

    return (
        <div className="search-form">
            <form className='search-form__form' onSubmit={onSubmit}>
                <input
                    value={value}
                    type="text"
                    placeholder='Фильм'
                    className='search-form__input'
                    minLength='2'
                    maxLength='30'
                    required
                    onChange={(event) => onChange(event.target.value)}
                />
                <button
                    type="submit"
                    className='search-form__button'
                >
                        Найти
                    </button>
            </form>
            <FilterCheckbox toggled={short} onToggle={onShortChange} />
        </div>
    )
}

export default SearchForm;