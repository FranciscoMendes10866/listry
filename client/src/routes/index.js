import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'

const routes = [
    {
        title: 'Sign Up',
        path: '/',
        component: SignUp,
    },
    {
        title: 'Sign In',
        path: '/sign-in',
        component: SignIn,
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
    },
]

export default routes
