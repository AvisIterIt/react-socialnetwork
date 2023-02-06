const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Nina" },
    { id: 3, name: "Vasya" },
    { id: 4, name: "Fedya" },
    { id: 5, name: "Alex" },
  ],
  messages: [
    { id: 1, message: "Hi,brooo!" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Yo,maaaan!" },
    { id: 4, message: "Yo,maaaan!" },
    { id: 5, message: "Yo,maaaan!" },
  ],
};
const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
export default dialogsReduser;
