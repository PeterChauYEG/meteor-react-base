Meteor.methods({
  sendEmail: (to, from, subject, text) => {
    check( [ to, from, subject, text ] , [ String ] );

    // send email
    Email.send({
      to,
      from,
      cc: from,
      subject,
      text
    });
  }
});
