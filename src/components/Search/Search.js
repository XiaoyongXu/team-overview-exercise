import React from 'react'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search.scss'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    flex: 1,
    borderRadius: 29,
  },
  icon: {
    width: 14,
    height: 15,
    marginRight: 10,
    marginLeft: 15,
  },
  input: {
    width: 'calc(100% - 60px)',
    height: '100%',
    border: 'none',
  },
}

const Search = ({
  placeholder,
  onChange,
  style,
}) => (
  <div style={{ display: 'flex' }}>
    <div className="searchComponent" style={{ ...styles.container, ...style }}>
      <FontAwesomeIcon
        className="searchIcon"
        icon={faSearch}
        style={styles.icon}
      />
      <input
        type="search"
        className="searchInput"
        data-testid="Search"
        placeholder={placeholder}
        onChange={onChange}
        style={styles.input}
      />
    </div>
  </div>
)

Search.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any,
}

Search.defaultProps = {
  placeholder: '',
  onChange: () => {},
  style: {},
  name: 'search',
  value: null,
}

export default Search
