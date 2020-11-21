import { useContext, useEffect } from 'react'
import { Table, Grid } from 'semantic-ui-react'

import { GlobalContext } from '../context/Provider'
import { get_addresses } from '../context/actions/get_addresses'

const AddressList = () => {
    const { addressesState, addressesDispatch } = useContext(GlobalContext)
    const addressesList = addressesState.addresses.list
    const handleFetch = () => {
        get_addresses()(addressesDispatch)
    }
    useEffect(handleFetch, [])
    const mapList = addressesList.map(address => {
        return (
            <Table.Row key={address.id}>
                <Table.Cell>{address.name}</Table.Cell>
                <Table.Cell>{address.street}</Table.Cell>
                <Table.Cell>{address.zip}</Table.Cell>
                <Table.Cell>{address.city}</Table.Cell>
                <Table.Cell>{address.country}</Table.Cell>
            </Table.Row>
        )
    })
    let cell
    if (addressesList.length === 0) {
        cell = <Table.Row><Table.Cell colSpan='5'>You have an empty list.</Table.Cell></Table.Row>
    } else {
        cell = mapList
    }
    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 20, marginBottom: 20 }}>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>Address List</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Street</Table.HeaderCell>
                            <Table.HeaderCell>Zip</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>Country</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cell}
                    </Table.Body>
                </Table>
            </Grid.Column>
        </Grid>
    )
}

export default AddressList
