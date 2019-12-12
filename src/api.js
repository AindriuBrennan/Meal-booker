import axios from "axios";
import Auth from './auth';


//get all bookings
export const getAllBookings = () => {
  return axios.get("http://localhost:8080/bookings").then(resp => resp.data);
};

// add a booking route
export const addBooking = (
  newRestaurantName,
  newAddress,
  newPhoneNo,
  newBookingTime,
  newBookingDate
) => {
  return axios
    .post("http://localhost:8080/bookings", {
      restaurantName: newRestaurantName,
      address: newAddress,
      phoneNo: newPhoneNo,
      bookingTime: newBookingTime,
      bookingDate: newBookingDate
    })
    .then(resp => resp.data);
};



//update booking route
export const updateBooking = bookingTime => (
  updateRestaurantName,
  updateAddress,
  updatePhoneNo,
  updateBookingTime,
  updateBookingDate
) => {
  return axios
    .put(`http://localhost:8080/bookings/${bookingTime}`, {
      restaurantName: updateRestaurantName,
      address: updateAddress,
      phoneNo: updatePhoneNo,
      bookingTime: updateBookingTime,
      bookingDate: updateBookingDate
    })
    .then(resp => resp.data);
};

//delete a booking
export const deleteBooking = bookingTime => {
  return axios.delete(`http://localhost:8080/bookings/${bookingTime}`).then(resp => resp.data);
};




//login a user
export const login = async(email, password) => {
  const resp = await axios.post('http://localhost:8080/users', {email: email, password: password});
  return resp.data;
};

//register a new user
export const signup = async(email, password) => {
  const resp = await axios.post('http://localhost:8080/users?action=register', {email:email,password:password});
  return resp.data;
};
