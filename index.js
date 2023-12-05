// index.js

// Function to calculate the distance from headquarters in blocks
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  // Function to calculate the distance from headquarters in feet
  function distanceFromHqInFeet(location) {
    // Assuming each block is 264 feet
    return Math.abs(location - 42) * 264;
  }
  
  // Function to calculate the distance traveled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Assuming each block is 264 feet
  }
  
  // Function to calculate the fare price based on distance
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264; // Assuming each block is 264 feet
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      // 2 cents per foot (the first 400 feet are free)
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Fixed fare for distances over 2000 feet but within 2500 feet
    } else {
      return 'cannot travel that far'; // Updated error message
    }
  }
  
  // Export all the functions
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };