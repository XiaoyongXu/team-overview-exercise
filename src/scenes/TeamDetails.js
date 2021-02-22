import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'
import Header from '../components/Header'
import './common.scss'
import Search from '../components/Search'
import Card from '../components/Card'
import path from '../utils/path'

class TeamDetails extends Component {
  state = {
    teamId: '',
    teamName: '',
    users: [],
    search: '',
    error: '',
  }

  componentDidMount() { // get teams detail information mapped by user
    const { location } = this.props
    if (location && location.state) {
      const { users, teamName, teamId } = location.state
      this.setState({ users, teamName, teamId })
    } else {
      this.setState({ error: 'No state passed from location'}) // error handling
    }
  }

  render() {
    const {
      teamName,
      users = [],
      search,
      error,
    } = this.state
    if (error) return (
      <Alert color="danger">
        {error}
      </Alert>)
    const { history, location } = this.props
    const userCards = users
      .filter(user => user.name.toLowerCase().includes(search.toLowerCase())
        || user.id.toLowerCase().includes(search.toLowerCase())
      )
      .map((user, index) => (
        <Card
          key={user.id}
          index={index + 10} // in order to make image different than main page
          title={user.name}
          subTitle={`ID: ${user.id}`}
          onClick={() => history.push({ pathname: path.userDetails, state: { ...location.state, userId: user.id, imgIndex: index + 10 } })}
        />
      ))
    return (
      <div className="page-root">
        <Header
          title={teamName.toUpperCase()}
          style={{ height: 140 }}
          backLabel="Back"
          onBack={() => history.push({ pathname: '/' })}
        >
          <Search
            value={search}
            onChange={({ target: { value } }) => this.setState({ search: value })}
            placeholder="Search user's ID or name"
          />
        </Header>
        <div className="page-main">
          {userCards}
        </div>
      </div>
    )
  }
}


TeamDetails.propTypes = {
  actions: PropTypes.object,
}

TeamDetails.defaultProps = {
  actions: {},
}

export default TeamDetails
