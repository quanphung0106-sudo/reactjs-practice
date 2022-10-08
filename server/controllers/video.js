import { createError } from "../error.js";
import Video from "../models/Video.js";
import User from "../models/User.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const getVideos = async (req, res, next) => {
  try {
    const video = await Video.find();
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video is not found!"));

    //Neu id user tu request === user id trong database thi execute
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You can just update your video!"));
    }
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video is not found!"));

    //Neu id user tu request === user id trong database thi execute
    if (req.user.id === video.userId) {
      const deletedVideo = await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("Your video has been deleted");
    } else {
      return next(createError(403, "You can just delete your video!"));
    }
  } catch (err) {
    next(err);
  }
};

export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("The view has been increased");
  } catch (err) {
    next(err);
  }
};

export const trend = async (req, res, next) => {
  try {
    //views: -1 => bring the most views to us
    //views: 1 => bring the less views to tus
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const sub = async (req, res, next) => {
  try {
    //first: find "current user" and get the "subscribedUsers" field from the model
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    //second: from the "subscribedChannels" => loop the array and return all users' videos subscribed.
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        //find all but set the condition for the query
        return Video.find({ userId: channelId });
      })
    );

    //flat(): remove nested array
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

export const tags = async (req, res, next) => {
  //get all the query after "?"
  //Ex: /videos/tags?tags=js,reactjs => js, reactjs
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      //$options: "i": doesn't care about uppercase or lowercase
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
