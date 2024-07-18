import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {IoIosHome} from 'react-icons/io'
import {MdMail} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <navbar className="navbar">
      <div className="nav-container">
        <Link to="/">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
        </Link>

        <div className="router-heading-names">
          <Link to="/" className="link-item">
            <p className="name">Home</p>
          </Link>
          <Link to="/jobs" className="link-item">
            <p className="name">Jobs</p>
          </Link>
        </div>
        <div className="logout-btn-container">
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
        <div className="react-icons-container">
          <Link to="/">
            <IoIosHome className="icon" />
          </Link>
          <Link to="/jobs">
            <MdMail className="icon" />
          </Link>

          <FiLogOut className="icon" onClick={onClickLogout} />
        </div>
      </div>
    </navbar>
  )
}
export default withRouter(Header)
// <ul>
//   <li>hy</li>
//   <li>hy</li>
//   <li>hy</li>
// </ul>
