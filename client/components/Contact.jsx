import React from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
  paper: {
    marginLeft: '20px',
    marginRight: '20px',
    minHeight: '600px',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  button: {
    marginTop: '20px'
  },
  div: {
    minHeight: '600px'
  }
};

// define and export our Contact component
export default Contact = React.createClass({
  displayName: 'Contact',
  handleSubmit(event) {
    event.preventDefault();

    // Mail address which this form should send to
    const to = Meteor.settings.public.contactForm.to;
    const from = document.getElementById('email').value;
    const subject = 'I want to get involved';
    const name = document.getElementById('name').value;
    const passion = document.getElementById('passion').value;
    const link = document.getElementById('link').value;
    const message = document.getElementById('message').value;
    const body = `Hi,\n
      ${passion}\n
      ${message}\n
      \n
      Regards,\n
      ${name}\n
      ${link}`;

    if (from === '' || name === '' || passion === '' || link === '' || link === 'http://' || message === '') {
      Bert.alert( 'Please fill in the entire form', 'danger', 'growl-top-right' );
      return;
    }

    Meteor.call('sendEmail', to, from, subject, body);
    Bert.alert( 'Email sent! We\'ll get in touch with you soon', 'success', 'growl-top-right' );

    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('passion').value = '';
    document.getElementById('link').value = '';
    document.getElementById('message').value = '';

    FlowRouter.go('/');
  },
  render() {
    return (
      <Paper style={styles.paper} zDepth={1} className="vertical-center">
        <h1>{'Contact'}</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText='Lenoardo Da Vinci'
            floatingLabelText='Name'
            fullWidth={true}
            id='name'
          />
          <TextField
            hintText='leonardo@monalisa.fr'
            floatingLabelText='Email'
            fullWidth={true}
            id='email'
            type='email'
          />
          <TextField
            hintText='I create works of art and observe the heavens'
            floatingLabelText='What do you do?'
            fullWidth={true}
            multiLine={true}
            rows={1}
            rowsMax={4}
            id='passion'
          />
          <TextField
            defaultValue='http://'
            floatingLabelText='Link to your work?'
            fullWidth={true}
            id='link'
            type='url'
          />
          <TextField
            hintText="I'd like to get involved."
            floatingLabelText='Message'
            fullWidth={true}
            multiLine={true}
            rows={1}
            rowsMax={4}
            id='message'
          />
          <RaisedButton
            style={styles.button}
            primary={true}
            label='Submit'
            type='submit'
          />
        </form>
      </Paper>
    );
  },
});
