import axios from "axios";

//get all bookings
export const getAllBookings = () => {
  return axios("/bookings").then(resp => resp.data);
};

//add a booking route
export const addBooking = (
  newRestaurantName,
  newAddress,
  newPhoneNo,
  newBookingTime,
  newBookingDate
) => {
  return axios
    .post("/bookings", {
      restaurantName: newRestaurantName,
      address: newAddress,
      phoneNo: newPhoneNo,
      bookingTime: newBookingTime,
      bookingDate: newBookingDate
    })
    .then(resp => resp.data);
};

//update booking route 
export const updateBooking = (
  updateRestaurantName,
  updateAddress,
  updatePhoneNo,
  updateBookingTime,
  updateBookingDate
) => {
  return axios
    .put("/bookings", {
      restaurantName: updateRestaurantName,
      address: updateAddress,
      phoneNo: updatePhoneNo,
      bookingTime: updateBookingTime,
      bookingDate: updateBookingDate
    })
    .then(resp => resp.data);
};
