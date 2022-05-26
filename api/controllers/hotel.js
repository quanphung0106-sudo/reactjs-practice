import Hotel from "../models/Hotel.js";

//Create hotel
// [POST]: /api/hotels/
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(201).json(saveHotel);
  } catch (err) {
    next(err);
  }
};

//Update hotel
// [PUT]: /api/hotels/:id
export const updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//Delete hotel
// [DELETE]: /api/hotels/:id
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

//Delete all hotels
// [DELETE]: /api/hotels/
export const deleteAllHotels = async (req, res, next) => {
  try {
    await Hotel.remove();
    res.status(200).json("All Hotels have been deleted.");
  } catch (err) {
    next(err);
  }
};

//Get a hotel
// [GET]: /api/hotels/find/:id
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//Get all hotels
// [GET]: /api/hotels/
export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: {
        $gt: min | 1,
        $lt: max || 999,
      },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// [GET]: /api/hotels/countByCity
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

// [GET]: /api/hotels/countByType
export const countByType = async (req, res, next) => {
  const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
  const resortCount = await Hotel.countDocuments({ type: "resort" });
  const villaCount = await Hotel.countDocuments({ type: "villa" });
  const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  try {
    res.status(200).json([
      {
        type: "hotel",
        count: hotelCount,
      },
      {
        type: "apartment",
        count: apartmentCount,
      },
      {
        type: "resort",
        count: resortCount,
      },
      {
        type: "villa",
        count: villaCount,
      },
      {
        type: "cabin",
        count: cabinCount,
      },
    ]);
  } catch (err) {
    next(err);
  }
};
