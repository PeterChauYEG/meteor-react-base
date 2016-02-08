import React from 'react';
import Helmet from 'react-helmet';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import muiDarkTheme from './stylesheets/muiDarkTheme.js';
import { Spacer } from './Spacer.jsx';
import { Navigation } from './Navigation.jsx';

// define and export our Layout component
export const Layout = React.createClass({
  propTypes: {
    content: React.PropTypes.object.isRequired
  },
  // the key passed through context must be called 'muiTheme'
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(muiDarkTheme),
    };
  },
  render() {
    return (
      <div>
        <Helmet
          title="Meteor + React Base"
          meta={ [
            { name: 'author', content: 'Laboratory One' },
            { name: 'viewport', content: 'user-scalable=no, initial-scale=1, minimal-ui, maximum-scale=1, minimum-scale=1' },
            { name: 'description', content: 'A starting point for Meteor (1.3.0) and React (with the Meteor React Mixin) web applications.' },
            { name: 'keywords', content: 'meteor, react, javascript, boilerplate' },
            { name: 'robots', content: 'index, follow' },
            { name: 'revisit-after', content: '14 days' },
            { name: 'og:title', content: 'Meteor + React Base' },
            { name: 'og:type', content: 'website' },
            { name: 'og:description', content: 'A starting point for Meteor (1.3.0) and React (with the Meteor React Mixin) web applications.' },
            { name: 'apple-mobile-web-app-title', content: 'Laboratory One' },
            { name: 'application-name', content: 'Laboratory One' },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'msapplication-TileImage', content: '/images/favicons/mstile-144x144.png' },
            { name: 'theme-color', content: '#202023' },
          ] }
          link={ [
            { rel: 'apple-touch-icon', size: '57x57', href: '/images/favicons/apple-touch-icon-57x57.png' },
            { rel: 'apple-touch-icon', size: '60x60', href: '/images/favicons/apple-touch-icon-60x60.png' },
            { rel: 'apple-touch-icon', size: '72x72', href: '/images/favicons/apple-touch-icon-72x72.png' },
            { rel: 'apple-touch-icon', size: '76x76', href: '/images/favicons/apple-touch-icon-76x76.png' },
            { rel: 'apple-touch-icon', size: '114x114', href: '/images/favicons/apple-touch-icon-114x114.png' },
            { rel: 'apple-touch-icon', size: '120x120', href: '/images/favicons/apple-touch-icon-120x120.png' },
            { rel: 'apple-touch-icon', size: '144x144', href: '/images/favicons/apple-touch-icon-144x144.png' },
            { rel: 'apple-touch-icon', size: '152x152', href: '/images/favicons/apple-touch-icon-152x152.png' },
            { rel: 'apple-touch-icon', size: '180x180', href: '/images/favicons/apple-touch-icon-180x180.png' },
            { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-16x16.png', size: '16x16' },
            { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-32x32.png', size: '32x32' },
            { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-96x96.png', size: '96x96' },
            { rel: 'icon', type: 'image/png', href: '/images/favicons/android-chrome-192x192.png', size: '192x192' },
            { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon-194x194.png', size: '194x194' },
            { rel: 'manifest', href: '/images/favicons/manifest.json' },
            { rel: 'mask-icon', href: '/images/favicons/safari-pinned-tab.svg', color: '#202023' },
          ]}
        />
        <Navigation />
        <Spacer />
          <div>
            { this.props.content }
          </div>
      </div>
    );
  },
});
