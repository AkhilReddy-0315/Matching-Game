import './index.css'

import {Component} from 'react'

class Navbar extends Component {
  render() {
    const {count, timer} = this.props

    return (
      <div className="nav-bg">
        <nav className="nav-con">
          <ul className="nav-ul">
            <li>
              <img
                className="website-logo-img"
                src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                alt="website logo"
              />
            </li>
            <li className="nav-inner">
              <p className="nav-score">Score: {count}</p>
              <div className="img-con">
                <img
                  className="timer-logo-img"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                />
                <p className="nav-timer">{timer}</p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
