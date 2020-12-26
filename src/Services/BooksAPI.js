import axios from 'axios';

const APIKey = "AIzaSyDY2jpoXDAUQAde8laLGvV9b_rXHUOG6HE";

const BookLib = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksBySearch = (SearchTerm, setBooks, sortTerm, ItemPerPage, firstitem, setPagelist) => {
    BookLib.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
            maxResults: ItemPerPage,
            orderBy: sortTerm,
            startIndex: firstitem,

        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data);
        let pageList = []
        for (let i = 0; i <= response.data.totalItems; i += ItemPerPage) {
            pageList.push(i)
        }
        setPagelist(pageList)
    })
}

export { getBooksBySearch };