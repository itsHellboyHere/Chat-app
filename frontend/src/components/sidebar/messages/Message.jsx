const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://avatar.iran.liara.run/public/28"></img>
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>hye! what's up.</div>
        <div className="chat-footer opacity-50 text-xs text-green-100 flex gap-1 items-center ">12:06</div>
    </div>
  )
}
export default Message