import { useState, useContext } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'

import { GlobalContext } from '../context/Provider'
import { update_address } from '../context/actions/update_address'

const UpdateModal = ({ address }) => {
    const { addressesDispatch } = useContext(GlobalContext)
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        name: address.name,
        street: address.street,
        zip: address.zip,
        city: address.city,
        country: address.country,
    })
    const handleOnChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value })
    }
    const handleOnSubmit = () => {
        const updatedData = {
            id: address.id,
            name: form.name,
            street: form.street,
            zip: form.zip,
            city: form.city,
            country: form.country
        }
        update_address(updatedData)(addressesDispatch)
        setOpen(false)
    }
    return (
        <Modal
            size="small"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button circular color="grey">✏️</Button>}
        >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content>
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
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
        </Button>
                <Button
                    content="Update changes"
                    onClick={handleOnSubmit}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default UpdateModal
