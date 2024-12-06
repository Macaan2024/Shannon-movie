import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';

// Base URL and API Key for OMDB API
const API_URL = "https://www.omdbapi.com/";
const API_KEY = "dc26e616"; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('Action'); // Default category
  const [error, setError] = useState(null);

  // Updated categories 
  const categories = ['Action', 'Comedy', 'Horror', 'Documentary'];

  // Reusable function to search movies by category or title
  const API_SEARCH = async (searchTerm) => {
    try {
      setError(null); // Reset error state
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${searchTerm}&type=movie`);
      const data = await response.json();

      if (data.Response === 'True') {
        const formattedMovies = data.Search.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          poster:
            movie.Poster && movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/200x300', 
        }));
        setMovies(formattedMovies);
      } else {
        console.error('OMDB API Error:', data.Error);
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      console.error('Network Error:', err.message);
      setError('Failed to fetch movies. Please try again later.');
    }
  };

  // Function to handle search input (search by movie title)
  const onSearch = (searchTerm) => {
    // Reset the error and fetch the search results
    setError(null);
    API_SEARCH(searchTerm);
  };

  useEffect(() => {
    // Fetch movies by category when it changes
    API_SEARCH(category);
  }, [category]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f4f4f4', minHeight: '100vh' }}>
      <Header onSearch={onSearch} />  {/* Pass the onSearch function to Header */}
      <Nav categories={categories} onSelectCategory={setCategory} />
      {error ? (
        <div style={{ padding: '20px', color: 'red' }}>{error}</div>
      ) : (
        <Content movies={movies} />
      )}
      <Footer />
    </div>
  );
};

export default App;
