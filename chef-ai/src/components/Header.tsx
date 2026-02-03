

import logo from "../images/chef-logo.jpeg"
export default function Header(){

    return (
      < header className="header">
        <div className="logo-head">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Chef Claude</h1>
      </header>
    );
}