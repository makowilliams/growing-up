import React from 'react';
import LoginForm from '../../Components/LoginForm';

export default class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    };

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/home'
        history.push(destination)
  }

        render() {
            return (
                <section className='LoginPage'>
                    <div>
                        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                    </div>
                </section>
            );
        }
}
