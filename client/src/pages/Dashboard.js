import { Tab, Grid } from 'semantic-ui-react'

import AddressForm from '../components/AddressForm'
import AddressList from '../components/AddressList'

const Dashboard = () => {
    const panes = [
        { menuItem: 'List', render: () => <Tab.Pane><AddressList /></Tab.Pane> },
        { menuItem: 'Create', render: () => <Tab.Pane><AddressForm /></Tab.Pane> },
    ]
    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth: 1000, marginTop: 50 }}>
                <Tab
                    menu={{ fluid: true, vertical: true }}
                    menuPosition='left'
                    panes={panes}
                />
            </Grid.Column>
        </Grid>
    )
}

export default Dashboard
