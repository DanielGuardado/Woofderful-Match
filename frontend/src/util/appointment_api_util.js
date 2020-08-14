import axios from "axios";

export const fetchAppointment = (appointmentId) =>
  axios.get(`/api/appointments/${appointmentId}`);

export const createAppointment = (appointment) =>
  axios.post("/api/appointments/", appointment);

// export const fetchAppointments = (shelterId) =>
//   axios.get(`/api/appointments/shelter/${shelterId}`);

export const fetchUserAppointments = (userId) =>
  axios.get(`api/appointments/user/${userId}`);

export const fetchAppointments = (shelterId) =>
  axios.get(`/api/appointments/user/${shelterId}`);

export const updateAppointment = (appointment) =>
  axios.post(`/api/appointments/${appointment._id}/update`, appointment);
