import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addAuthorMutation, getAuthorsQuery } from '../queries/queries'

class AddAuthor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                name: this.state.name
            },
            refetchQueries: [{ query: getAuthorsQuery}]
        })
    }

    render() {
        return (
            <form id="add-author" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Author Name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default graphql(addAuthorMutation)(AddAuthor);