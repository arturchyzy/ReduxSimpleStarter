export function selectBook(book) {
    // selectBook is and ActionCreator, it need to return an action, and object with a type property
    return {
        type : 'BOOK_SELECTED',
        payload : book
    };
}