import React from 'react'
import SearchBar from './SearchBar'
import './titlebar.scss'
class TitleBar extends React.Component {
  render() {
    const { me } = this.props
    return (
      <div className="titlebar">
        <div className="titlebar-inner">
          <SearchBar />
          <div className="user">
            <img src={me.images[0].url} alt={me.dispaly_name}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TitleBar
