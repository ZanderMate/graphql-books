import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries'

class BookDetails extends Component {

    displayBookDetails() {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.author.name}</p>
                    <p>{book.genre}</p>
                    <br />
                    <br />
                    <p><b>All Books by this Author:</b></p>
                    <p className="other-books">
                        {book.author.books.map(item => {
                            return <p key={item.id}>{item.name}</p>
                        })}
                    </p>
                </div>
            )
        } else {
            return <div>No Book Selected</div>
        }
    }

    render() {
        return (
            <div id="book-details">
                {this.displayBookDetails()}
            </div >
        );
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookid
            }
        }
    }
})(BookDetails);