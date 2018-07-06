import React, { Component } from 'react';
import { Provider} from 'react-redux';
import history from './components/history';

import Index from './components';
import Weconnect from './store';


/**
 * App Component which is the entry point to the App
 * 
 * ```html
 * <App />
 * ```
 */
class App extends Component {
  
  render() {
    return (
      <Provider store={ Weconnect }history={history}>
        <Index/>
      </Provider>
    );
  }
}

export default App;
