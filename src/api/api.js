import axios from "axios"

const token = "1755080542:AAFV6RAZ8DH1OYDwkja-YD7BCAubTuuzeRI";
const chatId = "-591227983";

export default function sendMessages(msq) {
    return axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msq}`)
        .then(response => {
            return response.data
        })
}