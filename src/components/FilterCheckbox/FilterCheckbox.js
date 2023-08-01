import './FilterCheckbox.css';

function FilterCheckbox() {
   return (
      <div className='filter-checkbox'>
         <input
            className='filter-checkbox__input'
            id='checkbox__label'
            type='checkbox'
         />
         <label className='filter-checkbox__text' htmlFor='checkbox__label'>Короткометражки</label>
      </div>
   )
}

export default FilterCheckbox;