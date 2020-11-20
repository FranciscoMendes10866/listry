import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Form,
    Button,
    Grid,
    Header,
} from 'semantic-ui-react'

import { GlobalContext } from '../context/Provider'
import { sign_in } from '../context/actions/sign_in'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const { authDispatch } = useContext(GlobalContext)
    const history = useHistory()
    const handleOnChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value })
    }
    const handleOnSubmit = () => {
        sign_in(form)(authDispatch)
        setForm({
            email: '',
            password: '',
        })
        history.push('/dashboard')
    }
    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 100 }}>
                <Header as='h1' style={{ marginBottom: 30 }}>Sign in</Header>
                <Form>
                    <Form.Field>
                        <Form.Input
                            value={form.email}
                            onChange={handleOnChange}
                            name="email"
                            type="email"
                            placeholder='Email'
                            label="Email"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            value={form.password}
                            onChange={handleOnChange}
                            name="password"
                            type="password"
                            placeholder='Password'
                            label="Password"
                        />
                    </Form.Field>
                    <Button onClick={handleOnSubmit} type='submit'>Enter</Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default SignIn
