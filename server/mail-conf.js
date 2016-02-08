Meteor.startup( () => {
  process.env.Mail_URL = Meteor.settings.private.email;
});
