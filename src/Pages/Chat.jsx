import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";


const Chat = (props) => {

    const chatProps = useMultiChatLogic(
        "187447ea-6410-45bf-916c-240b986f99db",
        props.user.username,
        props.user.secret
    );

    return (

        <div style={{height: '100vh'}}>
            <MultiChatSocket { ...chatProps } />
            <MultiChatWindow { ...chatProps } style={{height: '100%'}} />
        </div>
    )
}

export default Chat