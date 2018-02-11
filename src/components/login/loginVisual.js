import React from 'react'
import { Redirect } from 'react-router-dom'
import Logo from '../../components/logo/logo'
import { List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button 
} from 'antd-mobile'
import { login } from '../../redux/user.redux'

class LoginVisual extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register() {
        // redirect to register route
        this.props.history.push('./register')
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    handleLogin() {
        this.props.onLogin(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <WingBlank>
                {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                <List>
                    <InputItem onChange={v => this.handleChange('username', v)}>Username</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v => this.handleChange('password', v)} type='password'>Password</InputItem>
                </List>
                <WhiteSpace />
                <Button type='primary' onClick={this.handleLogin}>Login</Button>
                <WhiteSpace />
                <Button onClick={this.register} type='primary'>Register</Button>
                </WingBlank>
            </div>
        )
    }
}

export default LoginVisual
