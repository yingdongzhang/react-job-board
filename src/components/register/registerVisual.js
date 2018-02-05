import React from 'react'
import Logo from '../../components/logo/logo'
import { List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button,
    Radio
} from 'antd-mobile'
import { register } from '../../redux/user.redux'

class RegisterVisual extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: '',
            passwordConfirm: '',
            type: 'candidate',
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    handleRegister() {
        this.props.onRegister(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                    <List>
                        <InputItem onChange={v => this.handleChange('user', v)}>Username</InputItem>
                        <InputItem onChange={v => this.handleChange('password', v)} type='password'>Password</InputItem>
                        <InputItem onChange={v => this.handleChange('passwordConfirm', v)} type='password'>Confirm</InputItem>
                    </List>
                    <WhiteSpace />
                    <List>
                        <RadioItem onChange={() => this.handleChange('type', 'candidate')} checked={this.state.type === 'candidate'}>Candidate</RadioItem>
                        <RadioItem onChange={() => this.handleChange('type', 'employer')} checked={this.state.type === 'employer'}>Employer</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={this.handleRegister} type='primary'>Register</Button>
                </WingBlank>
            </div>
        )
    }
}

export default RegisterVisual
