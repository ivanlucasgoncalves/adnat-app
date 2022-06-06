const keys = require('../../config/keys');

module.exports = (user) => {
	return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Email Confirmation!</h3>
          <p>Hey ${user.fullName}, you're almost ready to start enjoying Kicko. </p>
          <p>Simply click the big yellow buttom bellow to verify your email address.</p>
          <div>
            <button><a href="${keys.redirectDomain}/api/emailvalidation/${user.token}">Verify Email</a></button>
          </div>
        </div>
      </body>
    </html>
  `;
};
