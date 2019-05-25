import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchDog from '../../actions/fetch-dog/fetch-dog';
import RandomDog from '../random-dog/random-dog';
import './dog-app.css';

export class DogApp extends Component {

  static propTypes = {
    dogUrl: PropTypes.string,
    fetchDog: PropTypes.func,
  };

  render() {
    return (
      <div className="app-container">
        <RandomDog
          fetchDog={this.props.fetchDog}
          dogUrl={this.props.dogUrl}
        />
      </div>
    );
  }
}

const mapProps = (state) => {
  return ({
    dogUrl: state.dog.url,
  });
};

const mapDispatch = {
  fetchDog,
};

export default connect(mapProps, mapDispatch)(DogApp);
