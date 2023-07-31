// const socket = io("http:localhost:3000",{});

const socket= io('http://localhost:8080',{})


const clientNumber= document.getElementById("client-total");
const messageContainer = document.getElementById("message-container");
const nameInput = document.getElementById("name-input");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

function sendMessage(){
    console.log(messageInput.value);
    const data = {
        name: nameInput.value,
        message:messageInput.value,
        dateTime: new Date()
    };
    socket.emit('message',data);
}

messageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMessage();
})

socket.on('clients-total',(data)=>{
    clientNumber.innerText= `Clients-Total:${data}`;
})

socket.on('chatMessage',(data)=>{
    console.log("i am here bro am i ?");
    console.log(data);
})


