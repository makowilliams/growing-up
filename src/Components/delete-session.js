import React from 'react';
import GrowingContext from '../growing-up-context';
import DeleteIcon from '@material-ui/icons/Delete';
import BabyApiService from '../baby-api-service';

export default class DeleteSession extends React.Component {
    static contextType = GrowingContext;
    state = { error: null };

    handleDeleteSession = (e) => {
        e.preventDefault();
        this.setState({ error: null });

        let setType;

        if (this.context.type === 'feeding') {
            setType = 'eating';
        } else setType = this.context.type;

        let sessionToDel = {
            id: this.props.session.id,
            type: setType
        };

        BabyApiService.delete_session(sessionToDel)

            .then((res) => {
                this.context.deleteSession(sessionToDel);
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
            <>
                <DeleteIcon onClick={(e) => this.handleDeleteSession(e)} />

                <td role="alert">
                    {error && <p className="error">{error}</p>}
                </td>
            </>
        );
    }
}
