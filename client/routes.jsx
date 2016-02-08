import React from 'react';
import { mount } from 'react-mounter';
import { Layout } from './Layout.jsx';
import { Home } from './Home.jsx';
import { Contact } from './Contact.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<Home />),
    });
  },
});

FlowRouter.route('/contact', {
  action() {
    mount(Layout, {
      content: (<Contact />),
    });
  },
});
