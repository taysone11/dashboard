import React from 'react'
import Customs from './customs/Customs'
import RecentUpdates from './recentUpdates/RecentUpdates'

const RightBoard = () => {
  return (
    <div className='right'>
    <Customs/>
    <RecentUpdates/>
    </div>
  )
}

export default RightBoard