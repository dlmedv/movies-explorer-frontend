import { useState } from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ value, short, onChange, onShortChange, onSearch }) {
    const [showError, setShowError] = useState(false);
    const onSubmit = (event) => {
        event.preventDefault();

        setShowError(!value);

        if (value) {
            onSearch();
        }
    };

    return (
        <div className="search-form">
            <form className='search-form__form' onSubmit={onSubmit} noValidate>
                <input
                    value={value}
                    type="text"
                    placeholder='Фильм'
                    className='search-form__input'
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
            <span className='search-form__error'>{ showError ? 'Нужно ввести ключевое слово' : ''}</span>
            <FilterCheckbox toggled={short} onToggle={onShortChange} />
        </div>
    )
}

export default SearchForm;