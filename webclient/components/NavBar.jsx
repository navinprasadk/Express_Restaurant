var React = require('react');
var {Link} = require('react-router');
var NavBar = React.createClass({

render:function(){
  return(
    <div className="container-fluid">
    <ul className="nav navbar-nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/gmailbox">Gmail</Link></li>
    <li><Link to="/about">About Us</Link></li>
    </ul>
    </div>
  );
}
});

module.exports=NavBar;
