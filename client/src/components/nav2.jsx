import React, {Component} from "react"
import {MenuItems} from "./items"
import "./nav2.css"
const authenticateWithServer = async didToken => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + didToken,
      },
    });

    if (res.status === 200) {
      // Set the UserContext to the now logged in user
      const { email } = await magic.user.getMetadata();
      await setUser(email);
      //   history.push('/profile');
      console.log("email address is:  ", email)

    }
  };
  const Logout = () => {
          magic.user.logout().then(() => {
            setUser({ user: null });
            localStorage.removeItem("guestEmail")
            history.push("/");
      
          })}

class Nav2 extends Component {

state = {clicked:false}

handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
}



render () {
    return(
        
        <nav className="NavBarItems collapse navbar-collapse">
            
            <h1 className="navbar-logo">TBD <i className="fas fa-fan"></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item,index)=>{
                    return (
                        <li kew={index} onClick={item.function}>
                            <a className={item.cName} href={item.url} >
                            
                            {item.label}
                            </a>
                            
                        </li>  
                    )
                })}
                {user?.loading ? (
          <div style={{ height: '58px' }}></div>
        ) : user?.issuer ? (
          <>


            <li>
              <button color='warning' size='sm' onPress={Logout}>
                Guest Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <CallToAction color='primary' size='sm' onPress={() => history.push('/login')}>
              Guest Login
            </CallToAction>
          </li>
        )}
                
            </ul>

        </nav>
    )
}

}




export default Nav2