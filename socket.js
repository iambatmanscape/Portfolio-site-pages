const socket = new WebSocket("ws://localhost:8080");
socket.addEventListener("open", (e) => {
    console.log("Connected to server");
})

socket.addEventListener("message", (e) => {
    if (e.data === "reload") {
        window.location.reload()
    }
})