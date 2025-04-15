import { io } from "socket.io-client";

const socket = io("https://www.vintagefashion.site/"); // replace with your backend URL
export default socket;
