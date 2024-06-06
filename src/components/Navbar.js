import React, { Component } from 'react'


export default class Navbar extends Component {

  render() {
    return (
      <div>
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary border-bottom border-body" data-bs-theme="dark" >
        <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="/general">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-a" href="/bussiness">Business</a>
                </li>
                <li className="nav-item">
                <a className="nav-a" href="/entertainment"> Entertainment</a>
                </li>
                <li className="nav-item">
                <a className="nav-a" href="/general">General</a>
                </li>
                <li className="nav-item">
                <a className="nav-a" href="/health">Health</a>
                </li>
                <li className="nav-item">
                <a className="nav-a" href="/science">Science</a>
                </li>
                <li className="nav-item">
                <a className="nav-a" href="/sports">Sports</a>
                </li>
                <li className="nav-item">
                <a className="nav-a" href="/technology">Technology</a>
                </li>

            </ul>
            
            </div>
        </div>
    </nav>
      </div>
    )
  }
}
