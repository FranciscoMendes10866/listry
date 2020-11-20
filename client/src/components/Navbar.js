import { useContext, useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

import { GlobalContext } from '../context/Provider'
import { log_out } from '../context/actions/log_out'

const Navbar = () => {
    const { authDispatch, authState } = useContext(GlobalContext)
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false)
    const stateToken = authState.auth.token
    const handleOnClick = () => {
        log_out()(authDispatch)
        history.push('/sign-in')
    }
    let navItems
    if (loggedIn === false) {
        navItems = (
            <>
                <Menu.Item position="right">
                    <Button as={Link} to="/" basic primary>Sign up</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as={Link} to="/sign-in" primary>Sign in</Button>
                </Menu.Item>
            </>
        )
    } else {
        navItems = (
            <>
                <Menu.Item position="right">
                    <Button onClick={handleOnClick} secondary>Log out</Button>
                </Menu.Item>
            </>
        )
    }
    const verifyLogged = () => {
        if (stateToken === null) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    }
    useEffect(() => verifyLogged())
    return (
        <Menu secondary pointing>
            <Menu.Item>
                <h1>Listry</h1>
            </Menu.Item>
            { navItems }
        </Menu>
    )
}

export default Navbar
