import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class AuthRoute extends React.Component {
    componentDidMount() {
        const publicRoutes = ['/login', 'register']
        if (publicRoutes.indexOf(this.props.location.pathname) > -1) {
            return null
        }
        // get user's info
        axios.get('/user/info').then(res => {
            if (res.status == 200) {
                if (res.data.code == 0) {
                    // logged in
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

// wrap compoment with AuthRoute to get access to route info in this.props
export default withRouter(AuthRoute)