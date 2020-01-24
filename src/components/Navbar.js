import React from 'react';

const Navbar = function (props) {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a href="/home" className="navbar-brand text-warning">Food Calories</a>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="/home">
            Home
            </a>
          </li>
              <li class="nav-item active">
                <a class="nav-link" href="/calorie">
                  Calories Details
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/food">
                  Food Details
                </a>
              </li>
            </ul>
          </div>


            <div className="navbar-collapse" id="navbarSupportedContent">
                <div className="form-inline ml-auto">
                    <input value={props.query} onChange={props.searchChanged} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={props.searchAction} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;