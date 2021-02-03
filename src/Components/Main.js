import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import List from './List';

const Main = () => {
  return (<div>
    <Header/>
    <List/>
  </div>)
}

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Main;
