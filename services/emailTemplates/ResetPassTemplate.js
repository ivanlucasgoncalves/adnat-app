const keys = require('../../config/keys');

module.exports = (user) => {
	return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Reset Password</h3>
          <p>Hey ${user.fullName}, you're close to complete your reset password. </p>
          <p>Simply click the big yellow buttom bellow to create a new password.</p>
          <div>
            <button><a href="${keys.redirectDomain}/newpass/${user.token}">Create New Password</a></button>
          </div>
        </div>
      </body>
    </html>
  `;
};
