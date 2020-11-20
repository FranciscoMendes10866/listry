import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalProvider } from './context/Provider'
import Routes from './routes/index'
import Navbar from './components/Navbar'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
