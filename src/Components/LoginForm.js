import React from 'react';
import TokenService from '../token-service';
import AuthApiService from '../auth-api-service';

export default class LoginPage extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    };

    state = { error: null };

    handleSubmitJwtAuth = (e) => {
        e.preventDefault();
        this.setState({ error: null });
        const { username, password } = e.target;

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then((res) => {
                username.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.props.onLoginSuccess();
            })
            .catch((res) => {
                this.setState({
                    error: res.error
                        ? res.error
                        : 'Sorry, something went wrong.'
                });
            });
    };

    render() {
        const { error } = this.state;
        return (
            <main className="loginMain signUpMain">
                <form
                    className="loginForm signUpForm"
                    onSubmit={(e) => this.handleSubmitJwtAuth(e)}
                >
                    <h1>Login</h1>

                    <div className="inputContainer">
                        {this.state.error && (
                            <p className="red">{this.state.error}</p>
                        )}

                        <div className="username">
                            <label htmlFor="username">Username:</label>
                            <input name="username" id="username" required />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input name="password" id="password" required />
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                        <div role="alert">
                            {error && <p className="error">{error}</p>}
                        </div>
                    </div>
                </form>
                <button onClick={() => window.history.back()}>Back</button>
            </main>
        );
    }
}
