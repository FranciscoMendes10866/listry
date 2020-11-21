import { useState } from 'react'
import {
    Form,
    Button,
    Grid,
    Header,
} from 'semantic-ui-react'

import { create_address } from '../context/actions/create_address'

const AddressForm = () => {
    const [form, setForm] = useState({
        name: '',
        street: '',
        zip: '',
        city: '',
        country: '',
    })
    const handleOnChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value })
    }
    const handleOnSubmit = () => {
        create_address(form)
        setForm({
            name: '',
            street: '',
            zip: '',
            city: '',
            country: '',
        })
    }
    return (
        <>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginBottom: 20, marginTop: 20 }}>
                    <Header as='h1' style={{ marginBottom: 30 }}>Address Form</Header>
                    <Form>
                        <Form.Group>
                            <Form.Input
                                value={form.name}
                                onChange={handleOnChange}
                                name="name"
                                type="text"
                                placeholder="Address name"
                                label="Name"
                            />
                            <Form.Input
                                value={form.zip}
                                onChange={handleOnChange}
                                name="zip"
                                type="text"
                                placeholder="Address zip"
                                label="Zip"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                                value={form.city}
                                onChange={handleOnChange}
                                name="city"
                                type="text"
                                placeholder="Address city"
                                label="City"
                            />
                            <Form.Input
                                value={form.street}
                                onChange={handleOnChange}
                                name="street"
                                type="text"
                                placeholder="Address street"
                                label="Street"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                                value={form.country}
                                onChange={handleOnChange}
                                name="country"
                                type="text"
                                placeholder="Address country"
                                label="Country"
                            />
                        </Form.Group>
                        <Button onClick={handleOnSubmit} type='submit' primary>Create</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default AddressForm
