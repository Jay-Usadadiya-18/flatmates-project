// In your src/App.js file, set up the routes:




import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import WelcomePage from './components/WelcomePage';
// Import other components...

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FirstPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/welcome" component={WelcomePage} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
