import React from 'react';
import './adminNavbarStyle.css';
import Sidebar from '../../components/Sidebar/sidebar'

function AdminNavbar() {
  return (
    <div>
      <Sidebar/>
      <div className='content'>
      </div>
    </div>
  )
}

export default AdminNavbar;