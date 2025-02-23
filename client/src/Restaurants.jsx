import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Restaurant.css';
import axios from 'axios';
import Card from "./Card";
import Searchbar from './Searchbar';
import { useNavigate } from 'react-router-dom';
const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12;
    const navigate=useNavigate();
  // Fetch data from the backend
  const fetchRestaurants = async (page) => {
    try {
      const data=await axios.get(`http://localhost:3000/restaurants?page=${page + 1}&limit=${itemsPerPage}`);
      console.log(data);
      setRestaurantData(data.data.data); // Update the current page data
      setPageCount(Math.ceil(data.data.total / itemsPerPage)); // Update total pages
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when the page changes
  useEffect(() => {
    fetchRestaurants(currentPage);
  }, [currentPage]);

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handlerest=(restaurant)=>{
    navigate("/restaurant",{state:restaurant});
  }
  return (
    <div className="app">
        <div id="searchbar">
        <Searchbar />
        </div>
      <div className="card-container">
        {restaurantData.map((rest) => (
            <div onClick={()=>handlerest(rest)}>
           <Card
           key={rest.id}
           name={rest["Restaurant Name"]}
           address={rest["Address"]}
           rating={rest["Aggregate rating"]}
           image={rest["featured_image"]}
           location={rest.location.coordinates}
           
           />
           </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Restaurant;