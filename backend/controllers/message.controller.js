const Conversation = require("../models/conversation.model");
const Message = require('../models/message.model');
const { getReceiverSocketId, io } = require("../socket/socket");
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

        // await conversation.save()
        // await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json(newMessage);

        //SOCKET IO functionality

        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            // io.to(<socket_id>).emit() used to save events to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }


    } catch (error) {
        console.log("Error in sendMessage controller", error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages")

        if (!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessages controller", error);
        res.status(500).json({ error: 'Internal server error' })
    }
}
module.exports = {
    sendMessage,
    getMessages,
}