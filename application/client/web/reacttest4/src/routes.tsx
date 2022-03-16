import Admin from './app/admin/admin';
import  Login  from './app/login/login';
import  Signup  from './app/signup/signup';
import  Home  from './app/home/home';
import  Manageroles  from './app/manageroles/manageroles';
import  Manageusers  from './app/manageusers/manageusers';
import Template from "./app/template/template";

let routes: any = [
  { path: '/admin', component: Admin },,
  { path: '/login', component: Login },
{ path: '/signup', component: Signup },
{ path: '/home', component: Home },
{ path: '/manageroles', component: Manageroles },
{ path: '/manageusers', component: Manageusers },
          { path: "/", component: Template, }

];

export default routes;
