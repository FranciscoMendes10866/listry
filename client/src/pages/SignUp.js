import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Form,
    Button,
    Grid,
    Header,
} from 'semantic-ui-react'

import { sign_up } from '../context/actions/sign_up'

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const history = useHistory()
    const handleOnChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value })
    }
    const handleOnSubmit = () => {
        sign_up(form)
        setForm({
            email: '',
            password: '',
        })
        history.push('/sign-in')
    }
    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 100 }}>
                <Header as='h1' style={{ marginBottom: 30 }}>Sign up</Header>
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
                    <Button onClick={handleOnSubmit} type='submit'>Create account</Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp
