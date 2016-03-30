import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
  paper: {
    marginLeft: '20px',
    marginRight: '20px',
    minHeight: '500px',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  button: {
    marginTop: '20px'
  }
};

// define and export our Home component
export default Home = React.createClass({
  displayName: 'Home',
  render() {
    return (
      <Paper style={styles.paper} zDepth={1} className="vertical-center">
        <h1>{'Meteor + React Base'}</h1>
        <p>{'A starting point for '}
          <a href='https://www.meteor.com/'>{'Meteor'}</a>
          {' (1.3.0), '}
          <a href='https://facebook.github.io/react/'>{'React'}</a>
          {' (0.14.8) and '}
          <a href='http://www.material-ui.com/'>{'Material-UI'}</a>
          {' web applications.'}</p>
        <RaisedButton
          style={styles.button}
          primary={true}
          label='Learn More'
          linkButton={true}
          href='https://github.com/PeterChauYeg/meteor-react-base/'
        />
      </Paper>
    );
  },
});
