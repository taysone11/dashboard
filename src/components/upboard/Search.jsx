import React, { useState } from 'react'



const Search = () => {

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return (
    <form className='input__field' >
        <input type="text" placeholder='Search' className='navbar__search'  onFocus={onFocus} onBlur={onBlur} />
        <button className={focused?'active':'disabled'}><span class="material-icons-outlined">search</span></button>
        
    </form>
  )
}

export default Search