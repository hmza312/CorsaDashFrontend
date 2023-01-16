import React, {FC} from 'react'

const TabHeader: FC = () => {
  return (
    <ul className='nav nav-tabs mt-2' id='myTab' role='tablist'>
      <li className='nav-item h-100' role='presentation'>
        <button
          className='nav-link active'
          id='home-tab'
          data-toggle='tab'
          data-target='#home'
          type='button'
          role='tab'
          aria-controls='home'
          aria-selected='true'
        >
          Home
        </button>
      </li>
      <li className='nav-item' role='presentation'>
        <button
          className='nav-link'
          id='profile-tab'
          data-toggle='tab'
          data-target='#profile'
          type='button'
          role='tab'
          aria-controls='profile'
          aria-selected='false'
        >
          Profile
        </button>
      </li>
      <li className='nav-item' role='presentation'>
        <button
          className='nav-link'
          id='contact-tab'
          data-toggle='tab'
          data-target='#contact'
          type='button'
          role='tab'
          aria-controls='contact'
          aria-selected='false'
        >
          Contact
        </button>
      </li>
    </ul>
  )
}

export default TabHeader
