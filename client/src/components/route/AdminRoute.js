import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
const AdminRoute = ({component:Component ,...rest}) => {

    const isAuth=localStorage.getItem("token")
    const result = useSelector(state => state.userReducer.result)
    if (isAuth) {
    if (result && result.isAdmin) {
       return  <Route component={Component} {...rest}/>
    }
}
    return <Redirect path='/'/>

}

export default AdminRoute
