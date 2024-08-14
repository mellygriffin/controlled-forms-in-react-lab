const BookCard = ({ title, author }) => {
    return (
        <div className="bookCard">
            <h3>{title}</h3>
            <p>by {author}</p>
        </div>
    )
}

export default BookCard;