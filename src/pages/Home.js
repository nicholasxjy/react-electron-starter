import React from 'react'
import { connect } from 'react-redux'
import { removeStorageItem } from '~/utils'
import { fetchMe } from '~/actions/auth'
import Spinner from '~/components/Spinner'
import TitleBar from '~/components/TitleBar'
import FeaturedList from '~/components/FeaturedList'
function mapStateToProps(state) {
  return state.authReducer
}

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.dispatch(fetchMe())
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      removeStorageItem('access_token')
      location.href = '/'
    }
  }
  render() {
    const { me, isLogin } = this.props
    return (
      <div className="container">
        { isLogin ? (<div className="content">
        <TitleBar me={me} />
        <FeaturedList />
      </div>) : <Spinner/>}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
