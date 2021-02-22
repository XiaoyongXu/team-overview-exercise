const config =  {
  restApiGetUsers: process.env.USERS || 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/',
  restApiGetTeams: process.env.USER || 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/',
}

export default config
