/* eslint-env browser */

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Creator from './components/Creator';
import Title from './components/Title';
import MainImage from './components/MainImage';
import Footer from './components/Footer';
import Stats from './components/Stats';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const context = this;
    const url = 'http://jumpstarter-product-summary-lb-253446518.us-west-1.elb.amazonaws.com';
    axios({
      method: 'get',
      url: `${url}/api/${this.props.projectId}`,
    })
      .then((response) => {
        context.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log('ERROR: could not fetch project:', error);
      });
  }

  render() {
    const style = {
      display: 'grid',
      gridTemplateColumns: '180px 200px 620px 235px 235px 180px',
      gridTemplateRows: '54px 130px 36px 450px 60px auto',
      justifyContent: 'stretch',
      lineHeight: '21px',
      fontSize: '14px',
      fontWeight: '400',
      fontFamily: 'Karla, Helvetica Neue, Helvetica, Arial, sans-serif',
      backgroundColor: '#FBFBFA',
      color: 'rgb(40, 40, 40)',
      gridAutoFlow: 'column',
    };

    return (
      <div className="Summary" style={style}>
        <Creator data={this.state.data} />
        <Title data={this.state.data} />
        <MainImage data={this.state.data} />
        <Footer data={this.state.data} />
        <Stats data={this.state.data} />
      </div>
    );
  }
}

Summary.propTypes = {
  projectId: PropTypes.string.isRequired,
};
