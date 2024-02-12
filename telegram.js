import {auth} from './config.js';
document.querySelector('#mainConsultationBtnModal').addEventListener('click',async function (e) {
    e.preventDefault();
    const data =
    Date()+
        "\n Ім'я: "+document.querySelector('#formNameID').value+
        "\n Номер телефону: "+document.querySelector('#formPhoneID').value+
        "\n Пошта: "+document.querySelector('#formMailID').value;


    const url = 'https://api.telegram.org/bot'+auth.token+'/sendMessage';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        text: data,
        disable_web_page_preview: false,
        disable_notification: false,
        reply_to_message_id: null,
        chat_id: auth.chatId
      })
    };
    
    await fetch(url, options)

 //console.log('sended');
 //console.log(JSON.stringify(auth));
});





