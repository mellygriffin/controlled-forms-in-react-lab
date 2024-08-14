import { useState } from 'react';

const [books, setBooks] = useState([
    {title: 'Fourth Wing', author: 'Rebecca Yarros'},
    {title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis'},
]); 

const [newBook, setNewBook] = useState({
    title: '',
    author: '',
});

const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Default prevented.')
};

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label>
        <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        />
        <label htmlFor="author">Author: </label>
        <input
        id="author"
        name="author"
        value={formData.author}
        onChange={handleInputChange}
        />

        <button type="submit">Submit Your Book</button>

        </form>
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
