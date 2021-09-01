import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/route/PrivateRoute";
import Navi from "./components/Navbar";
import { currentUser } from "./Redux/actions/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import  './components/Cards/Cards'
import FormProfile from "./components/FormProfile"


import Home from "./components/Home";
import GetallDoctors from "./components/GetallDoctors";
import Docfilters from "./components/Docfilters";
import DocProfile from './components/DocProfile'
import RdvForm from "./components/RdvForm";
import Chat from "./components/Chat";
import AdminDashboard from "./components/AdminDashboard";
import AdminRoute from "./components/route/AdminRoute";
import ReportForm from "./components/ReportForm";
import AdminReport from "./components/AdminReport.js";
import AdminClient from "./components/AdminClient";
import AdminRdv from "./components/AdminRdv";
import ScrollTop from './components/ScrollTop'
// import { Navbar } from "react-bootstrap";
function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(currentUser())
  }, [])
  
  return (
    <div >
      <Navi/>
      <ScrollTop  />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/signup' component={Signup}/>
        <Route path='/filter' component={Docfilters}/>
        <Route path='/docprofile/:id' component={DocProfile}/>
        <Route path='/alldoctors' component={GetallDoctors}/>
        <Route path='/chat' component={Chat}/>
        <AdminRoute path='/admindashboard' component={AdminDashboard}/>
        <AdminRoute path='/adminrdv' component={AdminRdv}/>
        <AdminRoute path='/adminreport' component={AdminReport}/>
        <AdminRoute path='/adminclient' component={AdminClient}/>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/editprofile" component={FormProfile} />
        <PrivateRoute path="/rdvform" component={RdvForm} />
        <PrivateRoute path='/rec' component={ReportForm}/>
      </Switch>
    </div>
  );
}

export default App;
