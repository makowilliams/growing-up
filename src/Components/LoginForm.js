import React from 'react';
import TokenService from '../token-service';
import AuthApiService from '../auth-api-service';
import { ReactComponent as BackArrow } from '../../src/assets/back-arrow.svg';

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

    Toggle = (e) => {
        var temp = document.getElementById('password');
        if (temp.type === 'password') {
            temp.type = 'text';
        } else {
            temp.type = 'password';
        }
    };

    render() {
        const { error } = this.state;
        return (
            <main className="loginMain signUpMain">
                <form
                    className="loginForm signUpForm"
                    onSubmit={(e) => this.handleSubmitJwtAuth(e)}
                >
                    <h1 className="login-header">Login</h1>

                    <div className="inputContainer">
                        {this.state.error && (
                            <p className="red">{this.state.error}</p>
                        )}

                        <div className="username">
                            <label
                                htmlFor="username"
                                className="username-input"
                            >
                                Username:
                            </label>
                            <input name="username" id="username" required />
                        </div>
                        <div className="password">
                            <label
                                htmlFor="password"
                                className="password-input-container"
                            >
                                Password:
                            </label>

                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="password-input"
                                required
                            />
                            <input
                                type="checkbox"
                                onClick={(e) => this.Toggle(e)}
                            />
                            <b className="show-password">Show Password</b>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="submit">
                            Submit
                        </button>
                        <div role="alert">
                            {error && <p className="error">{error}</p>}
                        </div>
                    </div>
                </form>
                <button onClick={() => window.history.back()} className="back">
                    <BackArrow />
                    Back
                </button>
                <p className="hero-copy">
                    To Demo our app, you can login with:
                    <br />
                    <br />
                    <span className="bold">Username:</span> test_user
                    <br />
                    <span className="bold">Password:</span> Pass5555
                </p>
            </main>
        );
    }
}
