import React, {Component} from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-info fixed-top flex-md-nowrap p-0 shadow">
        <p className='text-light mt-3 pb-3 pl-3 h2'>Fair Mart</p>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <h5 className="text-white"><span id="account">{this.props.account}</span></h5>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
