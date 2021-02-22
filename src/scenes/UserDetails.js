import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'
import Header from '../components/Header'
import './common.scss'
import config from '../utils/config'
import axios from 'axios'
import path from '../utils/path'
import Card from '../components/Card'

const dummyText = 'This is an introduction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class UserDetails extends Component {
  state = {
    user: {},
    search: '',
    error: '',
  }

  async componentDidMount() { // get User detail information
    const { location: { state } } = this.props
    if (state) {
      const { userId, imgIndex } = state
      const { data } = await axios.get(`${config.restApiGetUsers}/${userId}`)
      this.setState({ user: { ...data, imgIndex } })
    } else {
      this.setState({ error: 'No state passed from location'}) // error handling
    }
  }

  render() {
    const {
      user,
      error,
    } = this.state
    const { location: { state } } = this.props
    if (error) return (
    <Alert color="danger">
      {error}
    </Alert>)
    const { history } = this.props
    return (
      <div className="page-root">
        <Header
          title="Profile"
          style={{ height: 140 }}
          backLabel="Back"
          onBack={() => history.push({ pathname: path.teamDetails, state })}
        >
        </Header>
        <div className="page-main-center">
          <div className="page-main-body">
            <Card
              key={user.id}
              index={user.imgIndex}
            />
            <div className="text-group">
              <h2>{user.name}</h2>
              <h4>ID: {user.id}</h4>
              <h5>{dummyText}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


UserDetails.propTypes = {
  actions: PropTypes.object,
}

UserDetails.defaultProps = {
  actions: {},
}

export default UserDetails
