import express from "express";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
const router = express.Router();

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(201).json(saveRoom);
  } catch (err) {
    next(err);
  }
};

//Update room
// [PUT]: /api/rooms/:id
export const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

//Delete room
// [DELETE]: /api/rooms/:id
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;

  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

//Get a room
// [GET]: /api/rooms/:id
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

//Get all rooms
// [GET]: /api/rooms/
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export default router;
