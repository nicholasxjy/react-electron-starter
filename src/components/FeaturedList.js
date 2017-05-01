import React from 'react'
import { connect } from 'react-redux'
import { fetchFeaturedPlayLists } from '~/actions/spotify'

function mapStateToProps(state) {
  return state.spotifyReducer
}

class FeaturedList extends React.Component {
  componentWillMount() {
    const params = { limit: 10 }
    this.props.dispatch(fetchFeaturedPlayLists(params))
  }
  render() {
    const { lists } = this.props
    return (
      <div>list</div>
    )
  }
}

export default connect(mapStateToProps)(FeaturedList)
