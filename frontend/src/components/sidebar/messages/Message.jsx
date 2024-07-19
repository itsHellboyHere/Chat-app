import { useAuthContext } from "../../../context/AuthContext"
import { extractTime } from "../../../utils/extractTme"
import useConversation from "../../../zustand/useConversation"

const Message = ({message}) => {

  const {selectedConversation}=useConversation()
  const {authUser}= useAuthContext()
  const isSender = message.senderId === authUser._id;
  const chatClassName = isSender ? 'chat-end' :'chat-start';
  const profilePic = isSender ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = isSender ? 'bg-blue-500':"";
  const shakeClass= message.shouldShake ?"shake":"";
  const formatDate= extractTime(message.createdAt)
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic}></img>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs text-green-100 flex gap-1 items-center ">{formatDate}</div>
    </div>
  )
}
export default Message


// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src="https://avatar.iran.liara.run/public/28"></img>
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>hye! what's up.</div>
//         <div className="chat-footer opacity-50 text-xs text-green-100 flex gap-1 items-center ">12:06</div>
//     </div>
//   )
// }