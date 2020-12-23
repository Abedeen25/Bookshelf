import axios from 'axios';

const APIKey = "AIzaSyDY2jpoXDAUQAde8laLGvV9b_rXHUOG6HE";
// const BaseURL = "https://www.googleapis.com/books/v1/volumes";

const BookLib = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksBySearch = (SearchTerm, setBooks) => {
    BookLib.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data);
    })
}

export { getBooksBySearch };