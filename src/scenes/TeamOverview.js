import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import config from '../utils/config'
import { Alert } from 'reactstrap'
import Header from '../components/Header'
import './common.scss'
import Search from '../components/Search'
import Card from '../components/Card'
import path from '../utils/path'

class TeamOverview extends Component {
  state = {
    teams: [],
    users: [],
    search: '',
    error: '',
    isLoading: false,
  }

  async componentDidMount() { // get teams overview information from REST API
    try {
      this.setState({ isLoading: true })
      const responseForTeams = await axios.get(config.restApiGetTeams)
      const responseForUsers = await axios.get(config.restApiGetUsers)
      this.setState({
        users: responseForUsers.data || [],
        teams: responseForTeams.data || [],
        isLoading: false,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  render() {
    const {
      teams,
      users,
      search,
      error,
      isLoading,
    } = this.state
    const { history } = this.props
    const teamCards = teams
      .filter(team => team.name.toLowerCase().includes(search.toLowerCase())
        || team.id.toLowerCase().includes(search.toLowerCase())
      )
      .map((team, index) => (
        <Card
          key={team.id}
          index={index}
          title={team.name}
          subTitle={`ID: ${team.id}`}
          onClick={() => {
            history.push({
              pathname: path.teamDetails,
              state: {
                teamId: team.id,
                teamName: team.name,
                users: users.filter(user => user.teamId.includes(team.id)),
                teams,
              },
            })}
          }
        />))
    return (
      <div className="page-root">
        <Header title="TEAM OVERVIEW" style={{ height: 140 }}>
          <Search
            value={search}
            onChange={({ target: { value } }) => this.setState({ search: value })}
            placeholder="Search team's ID or name"
          />
        </Header>
        { error && // show alert if the error happened during the query
          (<Alert color="danger">
            {error}
          </Alert>)
        }
        <div className="page-main">
          {isLoading ? <h3>...loading</h3> : teamCards}
        </div>
      </div>
    )
  }
}


TeamOverview.propTypes = {
  actions: PropTypes.object,
}

TeamOverview.defaultProps = {
  actions: {},
}

export default TeamOverview
