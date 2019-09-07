import React from 'react';
import './App.css'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import Post from './Components/Post'
import PostForm from './Components/PostForm'
//layout imports
import Header from './Components/layout/Header'
import Footer from './Components/layout/Footer'

// redux imports
import {Provider} from 'react-redux'
import store from './store'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Header />
      <Switch>
         <Route exact path="/" component={Post} />
         <Route  path="/post" component={PostForm} />
      </Switch>
      <Footer />
      </div>
      </Router>
      </Provider>
    );
  }

}

export default App;
