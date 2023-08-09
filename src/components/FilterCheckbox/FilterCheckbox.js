import './FilterCheckbox.css';
// перенести в форму сеерч форм
function FilterCheckbox({ toggled, onToggle }) {
   return (
      <div className='filter-checkbox'>
         <input
            className='filter-checkbox__input'
            id='checkbox__label'
            type='checkbox'
            value={toggled}
            onClick={onToggle}
         />
         <label className={`filter-checkbox__text ${toggled ? 'filter-checkbox__text_checked' : ''}`} htmlFor='checkbox__label'>Короткометражки</label>
      </div>
   )
}

export default FilterCheckbox;