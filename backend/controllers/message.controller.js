const Conversation = require("../models/conversation.model");
const Message = require('../models/message.model')
const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        //SOCKET IO functionality

        // await conversation.save()
        // await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getMessages = async (req, res) => {
    try {
        const { id: usetToChatId } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, usetToChatId] },
        }).populate("messages")
        res.status(200).json(conversation.messages);

    } catch (error) {
        console.log("Error in getMessages controller", error);
        res.status(500).json({ error: 'Internal server error' })
    }
}
module.exports = {
    sendMessage,
    getMessages,
}