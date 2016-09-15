import React from 'react';

const strava = {
  baseUrl: 'https://www.strava.com/oauth/authorize',
  clientId: '13458',
  redirectUrl: 'http://localhost'
};

class Login extends React.Component {
  render() {
    return (
      <div className='login-wrapper'>
        <a href={`${strava.baseUrl}?client_id=${strava.clientId}&response_type=code&redirect_uri=${strava.redirectUrl}&approval_prompt=force`}>
          <img src='https://strava.github.io/api/images/LogInWithStrava@2x.png' />
        </a>
      </div>
    );
  }
}

export default Login;
