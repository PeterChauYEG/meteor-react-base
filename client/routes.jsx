import React from 'react';
import { mount } from 'react-mounter';
import Layout from '/client/Layout.jsx';
import Home from '/client/components/Home.jsx';
import Contact from '/client/components/Contact.jsx';

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
