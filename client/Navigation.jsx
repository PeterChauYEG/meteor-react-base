import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import Avatar from 'material-ui/lib/avatar';
import IconButton from 'material-ui/lib/icon-button';
import { Spacer } from './Spacer.jsx';
import MenuItem from 'material-ui/lib/menus/menu-item';

const styles = {
  title: {
    textAlign: 'center'
  },
  avatar: {
    height: '100px',
    width: '100px'
  }
};

// define and export our Navigation component
export const Navigation = React.createClass({
  displayName: 'Navigation',
  getInitialState: () => { return { open: false }; },
  handleOpen() { this.setState({ open: true }); },
  handleClose() { this.setState({ open: false }); },
  handleTitle() {
    FlowRouter.go('/');
  },
  menuItem(dest) {
    FlowRouter.go(dest);
    this.handleClose();
  },
  handleHome() {
    this.menuItem('/');
  },
  handleContact() {
    this.menuItem('/contact');
  },
  handleFacebook() {
    window.open('https://facebook.com');
  },
  handleGithub() {
    window.open('https://github.com/PeterChauYeg/meteor-react-base');
  },
  handleTwitter() {
    window.open('https://twitter.com');
  },
  render() {
    return (
      <div>
        <AppBar
          title="Meteor + React Base"
          onTitleTouchTap={this.handleTitle}
          onLeftIconButtonTouchTap={this.handleOpen}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Spacer />
          <div style={styles.title} onTouchTap={this.handleHome}><strong>Meteor + React Base</strong></div>
          <Spacer />
          <Spacer />
          <Avatar
            className='center-img'
            src='http://placehold.it/100x100'
            style={styles.avatar}
          />
          <Spacer />
          <MenuItem onTouchTap={this.handleHome}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleContact}>Contact</MenuItem>
          <div className="nav-bottom">
            <div className='horizontal-center'>
              <IconButton
                iconClassName='fa fa-facebook'
                onTouchTap={this.handleFacebook}
              />
              <IconButton
                iconClassName='fa fa-github'
                onTouchTap={this.handleGithub}
              />
              <IconButton
                iconClassName='fa fa-twitter'
                onTouchTap={this.handleTwitter}
              />
            </div>
          </div>
        </LeftNav>
      </div>
    );
  },
});
