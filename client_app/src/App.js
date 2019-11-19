import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="mainApp">
      <Switch>
        {
          routes.map((route, ind) => {
            return(
              <Route 
                key={ind}
                path={route.path}
                exact={route.exact}
                component={route.main}
                />
            )
          })
        }
      </Switch>
    </div>
  );
}

export default App;
