import React from 'react'
import Logo from '../../components/logo/logo'
import { List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button,
    Radio
} from 'antd-mobile'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'candidate'
        }
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>Username</InputItem>
                    <InputItem type='password'>Password</InputItem>
                    <InputItem type='password'>Confirm</InputItem>
                </List>
                <WhiteSpace />
                <List>
                    <RadioItem checked={this.state.type === 'candidate'}>Candidate</RadioItem>
                    <RadioItem checked={this.state.type === 'employer'}>Employer</RadioItem>
                </List>
                <WhiteSpace />
                <Button type='primary'>Register</Button>
            </div>
        )
    }
}

export default Register
