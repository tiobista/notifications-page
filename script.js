const markAllRead = document.querySelector('.btn');
const markAllUnread = document.querySelector('.btn.mark-all-unread');
let count = document.querySelector('h3 span');
const chatContainer = document.querySelectorAll('.chat-container');
let counter = count.innerHTML ;

markAllRead.addEventListener('click', (e)=>{
    e.preventDefault();
    
    chatContainer.forEach((chat)=>{
        if(chat.classList.contains('unread')){
            chat.classList.remove('unread');
            counter--;
        }
        
    })
    count.innerHTML = counter;
});
