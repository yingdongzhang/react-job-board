import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUserInfo } from '../../redux/user.redux'

// redux api
function mapStateToProps(state) {
    return state.user
}

function mapDispatchToProps(dispatch) {
    return {
        onLoadUserInfo: (state) => {
            dispatch(loadUserInfo(state))
        }
    }
}

class AuthRouteVisual extends React.Component {
    componentDidMount() {
        const publicRoutes = ['/login', '/register']
        if (publicRoutes.indexOf(this.props.location.pathname) > -1) {
            return null
        }
        // get user's info
        axios.get('/user/info').then(res => {
            if (res.status == 200) {
                if (res.data.code == 0) {
                    // logged in
                    this.props.onLoadUserInfo(res.data.data)
                } else {
                    this.props.history.push('/login')
                }
            }
        })
    }
    render() {
        return null
    }
}

const AuthRoute = connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRouteVisual))
// wrap compoment with AuthRoute to get access to route info in this.props
export default AuthRoute