import React from 'react';
import GrowingContext from '../../growing-up-context';

export default class SignUpPage extends React.Component {
    static contextType = GrowingContext;

    state = { error: null };

    handleRegistrationSuccess = (user) => {
        const { history } = this.props;
        history.push('/login');
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { first_name, last_name, username, password } = ev.target;

        this.setState({ error: null });
        this.context
            .postUser({
                first_name: first_name.value,
                last_name: last_name.value,
                username: username.value,
                password: password.value
            })
            .then((user) => {
                first_name.value = '';
                last_name.value = '';
                username.value = '';
                password.value = '';
                this.handleRegistrationSuccess();
            })
            .catch((res) => {
                this.setState({ error: res.error });
            });
    };

    render() {
        return (
            <section className="signUpMain">
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>

                    <div className="inputContainer">
                        <div className="firstname">
                            <label htmlFor="first_name">First name:</label>
                            <input name="firstname" id="first_name" />
                        </div>

                        <div className="lastname">
                            <label htmlFor="last_name">Last name:</label>
                            <input name="lastname" id="last_name" />
                        </div>

                        <div className="username">
                            <label htmlFor="username">Username:</label>
                            <input name="username" id="username" />
                        </div>

                        <div role="alert">
                            {this.state.error &&
                                this.state.error
                                    .toLowerCase()
                                    .includes('username') && (
                                    <p className="red">{this.state.error}</p>
                                )}
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input name="password" id="password" />
                        </div>

                        <div role="alert">
                            {this.state.error &&
                                this.state.error
                                    .toLowerCase()
                                    .includes('password') && (
                                    <p className="red">{this.state.error}</p>
                                )}
                        </div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}
