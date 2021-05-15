import sendMessages from "../api/api";

const SET_MESSAGES = 'messages/SET_EMAIL';
const CLOSE_MESSAGES_CODE = 'messages/CLOSE_MESSAGES_CODE';

let initialState = {
    messagesCode: null
}

export default function messagesPage(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGES:
            debugger
            return{
                ...state,
                messagesCode: action.boolCode
            }
        case CLOSE_MESSAGES_CODE:
            debugger
            return{
                ...state,
                messagesCode: null
            }
        default:
            return state
    }
}

const setMessages = (boolCode) => ({type: SET_MESSAGES, boolCode});
export const setCLoseCode = () => ({type: CLOSE_MESSAGES_CODE});


export const getUserStatus = messages => async (dispatch) => {
    let response = await sendMessages(messages)
    if(response.ok){
        dispatch(setMessages("успешно отправлено"))
    }else{
        dispatch(setMessages("извините, сообщение не отправлено"))
    }
}