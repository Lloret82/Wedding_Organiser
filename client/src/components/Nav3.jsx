import React, { useContext, useState, useEffect } from "react"
import { MenuItems, GuestMenuItem, CoupleMenuItem } from "./items"
import "./nav2.css"
import Auth from "../utils/auth"
import { useHistory } from "react-router-dom"
import { Link, useLocation } from "react-router-dom"
import { magic } from "../lib/magic"
import { UserContext } from "../lib/UserContext"
import rose from "../rose.png"

function Nav2() {
  const [clicked, setClick] = useState(false)
  const [userType, setUserType] = useState("")
  const history = useHistory()
  const [user, setUser] = useState("")

  useEffect(() => {
    // if (user) {
    let isUser = localStorage.getItem("user")
	let isGuest = localStorage.getItem("guestEmail")
    if (isUser) {
      setUserType("couple")
    }
    if (isGuest) {
		setUserType("guestEmail")
	   }
  })

  // Location = () =>useLocation()
  // History =()=> useHistory()

  const couplelogout = (e) => {
    e.preventDefault()
    Auth.logout()
    setUserType("")
    history.push("/")
  }
  const guestlogout = (e) => {
	localStorage.removeItem("guestEmail")
	e.preventDefault()
	Auth.logout()
	  history.push("/")
  }
  

  const handleClick = () => {
    setClick(!clicked)
  }

  return (
	
		
	  
	  
	
    <nav className="NavBarItems" role="navigation">
      {/* <p className="navbar-logo" href="/"> */}
	  <a href="/" className="logo">
		   <img className="rose"
		src={rose}
		alt="brand"
		
	  />
	  </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {userType === "" &&
          MenuItems.map((item, index) => {
            return (
              <li kew={index}>
                <Link className={item.cName} to={item.url}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        {userType === "couple" &&
          CoupleMenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        {userType == "couple" && (
          <li className="nav-links" onClick={couplelogout}>
            Couple Logout
          </li>
        )}
		 {userType === "guestEmail" &&
          GuestMenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        {userType == "guestEmail" && (
          <li className="nav-links" onClick={guestlogout}>
            Guest Logout
          </li>
        )}
        {/* <li className="nav-links" onClick={couplelogout}>
						Logout
					</li>

					<li>
						<a className="nav-links" href="/login">Guest Login</a>
					</li>

                    <li className="nav-links" onClick={guestlogout}>
                        Guest Logout
                    </li>  */}
      </ul>
    </nav>

  )
}

export default Nav2
