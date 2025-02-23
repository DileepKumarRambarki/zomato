import React from 'react';
import './RestaurantCard.css'; // Updated styles for a prettier design
import { useLocation } from 'react-router-dom';
const RestaurantCard = () => {
  const location=useLocation();
  console.log(location.state);
  const restaurant_ = {
    "Restaurant Name": "The Square - Hotel Novotel",
    "Country Code": 1,
    "City": "Vizag",
    "Address": "Hotel Novotel, Beach Road, Maharani Peta, Vizag",
    "Locality": "Hotel Novotel, Maharani Peta",
    "Locality Verbose": "Hotel Novotel, Maharani Peta, Vizag",
    "Cuisines": "Continental, North Indian",
    "Average Cost for two": 1700,
    "Currency": "Indian Rupees(Rs.)",
    "Has Table booking": "No",
    "Has Online delivery": "No",
    "Is delivering now": "No",
    "Switch to order menu": "No",
    "Price range": 4,
    "Aggregate rating": 4.1,
    "Rating color": "Green",
    "Rating text": "Very Good",
    "Votes": 125,
    "location": {
      "type": "Point",
      "coordinates": [83.315935, 17.71069],
    },
    "id": "2800052",
    "featured_image": "https://b.zmtcdn.com/data/pictures/2/2800052/5e2709fd7730fdb2cbdb5716a381872a_featured_v2.jpg",
  };
  const restaurant=location.state|| restaurant_;
  return (
    <div className="card">
      {/* Featured Image */}
      <div className="card-image">
        <img src={restaurant["featured_image"]} alt={restaurant["Restaurant Name"]} />
      </div>

      {/* Restaurant Details */}
      <div className="card-content">
        <h2 className="card-title">{restaurant["Restaurant Name"]}</h2>
        <p className="card-subtitle">{restaurant.Cuisines}</p>

        {/* Location Details */}
        <div className="card-section">
          <h3>📍 Location</h3>
          <p>
            <strong>City:</strong> {restaurant.City}
          </p>
          <p>
            <strong>Address:</strong> {restaurant.Address}
          </p>
          <p>
            <strong>Locality:</strong> {restaurant.Locality}
          </p>
          <p>
            <strong>Coordinates:</strong> {restaurant.location.coordinates.join(', ')}
          </p>
        </div>

        {/* Pricing and Rating */}
        <div className="card-section">
          <h3>💰 Pricing & Rating</h3>
          <p>
            <strong>Average Cost for Two:</strong> {restaurant["Average Cost for two"]} {restaurant.Currency}
          </p>
          <p>
            <strong>Price Range:</strong> {restaurant["Price range"]}
          </p>
          <p>
            <strong>Rating:</strong> {restaurant["Aggregate rating"]} ({restaurant["Rating text"]})
          </p>
          <p>
            <strong>Votes:</strong> {restaurant.Votes}
          </p>
        </div>

        {/* Additional Details */}
        <div className="card-section">
          <h3>📌 Additional Info</h3>
          <p>
            <strong>Table Booking:</strong> {restaurant["Has Table booking"]}
          </p>
          <p>
            <strong>Online Delivery:</strong> {restaurant["Has Online delivery"]}
          </p>
          <p>
            <strong>Delivery Now:</strong> {restaurant["Is delivering now"]}
          </p>
          <p>
            <strong>Order Menu:</strong> {restaurant["Switch to order menu"]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;