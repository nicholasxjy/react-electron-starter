import React from 'react'


class SearchBar extends React.Component {
  render() {
    return (
      <form noValidate>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search it..."/>
        </div>
      </form>
    )
  }
}

export default SearchBar
