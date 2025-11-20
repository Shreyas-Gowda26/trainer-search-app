import axios from 'axios';

const BaseURL = 'https://tsa-nie-next.vercel.app/'

export const getTrainings = () => axios.get(`${BaseURL}/api/trainings`);

