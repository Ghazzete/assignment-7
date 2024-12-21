import React from "react";

interface Book {
  id: number;
  name: string;
  author: string;
}

interface BooksPageProps {
  books: Book[];
}

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center italic underline mb-6 text-blue-600">
        Books Collection (Server-Side Fetched)
      </h1>

      {/* Displaying loading or error state */}
      {books.length === 0 ? (
        <div className="text-center text-lg text-red-500">Failed to load books</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              {/* Placeholder image */}
              <img
                src={`https://picsum.photos/seed/${book.id}/400/300`}
                alt={book.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Book details */}
              <p className="font-bold text-xl mb-2 text-gray-800">{book.name}</p>
              <p className="font-medium text-gray-600 mb-4 text-sm">by {book.author}</p>

              {/* Learn more button */}
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const fetchBooks = async (): Promise<Book[]> => {
  const res = await fetch("https://simple-books-api.glitch.me/books/");
  const data: Book[] = await res.json();
  return data;
};

// Server-side fetching using async function
const ServerSidePage = async () => {
  let books: Book[] = [];
  try {
    books = await fetchBooks();
  } catch (error) {
    console.error("Error fetching books:", error);
  }

  return <BooksPage books={books} />;
};

export default ServerSidePage;
