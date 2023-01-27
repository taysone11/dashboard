import React from 'react'

const RecentUpdated = () => {
  return (
    <div>
      <h2>Recent Updates</h2>
      <div className='updates'>
          <div className="update">
          <div className='profile-photo'>
            </div>
            <div className="message">
              <p><b>Andrew West</b> bought the huge corporation last night</p>
              <small className="text-muted">30 seconds ago</small>
            </div>
          </div>
          <div className="update">
            <div className='profile-photo'></div>
            <div className="message">
              <p><b>Kyle West</b> recieved his order</p>
              <small className="text-muted">2 minutes ago</small>
            </div>
          </div>
          <div className="update">
            <div className='profile-photo'></div>
            <div className="message">
              <p><b>Michel</b> start learning redux</p>
              <small className="text-muted">37 minutes ago</small>
            </div>
          </div>
          <div className="update">
            <div className='profile-photo'></div>
            <div className="message">
              <p><b>Andrew West</b> bought the huge corporation last night</p>
              <small className="text-muted">2 hours ago</small>
            </div>
          </div>

      </div>


    </div>
  )
}

export default RecentUpdated