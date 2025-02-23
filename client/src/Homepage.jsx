import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Card from './Card';
import Searchbar from './Searchbar';
import axios from 'axios';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [location, setLocation] = useState({ lat: '', lan: '' });
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Fetch user location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation);
    } else {
      console.log('Error fetching location');
    }
  };

  const showLocation = (position) => {
    setLocation({ lat: position.coords.latitude, lan: position.coords.longitude });
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
  };

  // Fetch nearby restaurants
  
  const getRestaurants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/restaurants/nearby?lat=${location.lat}&lon=${location.lan}`
      );
      const restaurantData = response.data;
      setRestaurants(restaurantData);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false); // Stop loading after fetching data
    }
  };

  // Fetch restaurant image (if needed)
  const getImage = async (id) => {
    const response = await axios.get(`http://localhost:3000/restaurants/images?id=${id}`);
    return response.data;
  };

  // Get location on component mount
  useEffect(() => {
    getLocation();
  }, []);

  // Fetch restaurants when location is updated
  useEffect(() => {
    if (location.lat && location.lan) {
      getRestaurants();
    }
  }, [location]);

  // Handle restaurant card click
  const handlerest = (restaurant) => {
    navigate('/restaurant', { state: restaurant });
  };

  return (
    <div id={styles.container}>
      <div id={styles.navbar}>
        <Searchbar />
      </div>
      {loading ? ( // Show loader if data is still loading
        <Loader />
      ) : (
        <div id={styles.cards}>
          {restaurants.map((rest, index) => (
            <div key={index} onClick={() => handlerest(rest)}>
              <Card
                name={rest['Restaurant Name']}
                address={rest['Address']}
                rating={rest['Aggregate rating']}
                image={rest['featured_image']}
                location={rest.location.coordinates}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;