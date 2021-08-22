import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRouteGuest = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("guest")) {
          return <Component {...props} />
        } else {
            alert("Check your email, you'll be adviced when someone invites you")

          return <Redirect to="/" />
        }
      }}
    />
  )
}

export default PrivateRouteGuest
