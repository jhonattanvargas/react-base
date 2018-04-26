//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Assest
import './Global/css/App.css'

//Components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

//Data
const items = [
  {
      title: 'Home',
      url: '/'
  },
  {
      title: 'About Us',
      url: '/about'
  },
  {
      title: 'Contact Us',
      url: '/contact'
  }
]


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const {children} = this.props
    
    return (
      <div className="App">
        <Header title="Mi Página" items={items} />
        <Content body={children} />
        <Footer  copyright="&copy; MiPag 2018"/>
      </div>
    );
  }
}

export default App;
