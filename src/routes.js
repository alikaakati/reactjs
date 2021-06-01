import logo from './logo.svg';
import Login from './screens/login';
import Home from './screens/home';
import Payments from './screens/payments';
import { Route, Switch, Redirect } from 'react-router-dom';
import Registration from './screens/registration';
import Application from './screens/application';
import Curriculum from './screens/curriculum';
import Schedule from './screens/schedule';
import Email from './screens/email';
import EditProfile from './screens/editprofile';
import EditPassword from './screens/editpassword';

export const Routes = () => {
  return (
  
    <Switch>
      <Route exact path = "/" component = {Login} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Registration" component={Registration} />
      <Route exact path="/Payments" component={Payments} />
      <Route exact path="/Application" component={Application} />
      <Route exact path="/Curriculum" component={Curriculum} />
      <Route exact path="/Schedule" component={Schedule} />
      <Route exact path="/Email" component={Email} />
      <Route exact path="/EditProfile" component={EditProfile} />
      <Route exact path="/EditPassword" component={EditPassword} />
    </Switch>
  );
}

