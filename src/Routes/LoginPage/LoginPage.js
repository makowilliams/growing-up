import React from 'react';

export default class Login extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        },
        handleLoginSuccess: () => {}
    };

    state = { error: null };

    render() {
        return (
            <main className="loginMain signUpMain">
                <form
                    className="loginForm signUpForm"
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <h1>Login</h1>

                    <div className="inputContainer">
                        <div className="username">
                            <label htmlFor="username">Username:</label>
                            <input name="username" id="username" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input></input>
                        </div>
                    </div>
                </form>
            </main>
        );
    }
}
