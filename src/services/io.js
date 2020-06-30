import io from 'socket.io-client';

const socketIo = io(process.env.REACT_APP_API_URL);

export default socketIo;
