const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    cars: {
      category_name: String,
      required: true,
      car_category: {
        type: Array,
        name: String,
        required: true,
        sub_category: {
          name: String,
          category: String,
          photos: Array,
          content: String,
          price: String,
          year: Date,
          run: String,
          transmission: String,
          color: String,
          capacity: String,
          typeOfFuel: String,
          condition: String,
          numberOfHosts: Number,
          options: String,
          email: String,
          location: String,
          author: String,
          phone: String,
        },
      },
    },

    autoParts: {
      category_name: String,
      required: true,
      car_category: {
        type: Array,
        name: String,
        required: true,
        sub_category: {
          name: String,
          category: String,
          photos: Array,
          content: String,
          price: String,
          state: String,
          email: String,
          location: String,
          phone: String,
        },
      },
    },

    autoTires: {
      category_name: String,
      required: true,
      car_category: {
        type: Array,
        name: String,
        required: true,
        sub_category: {
          name: String,
          category: String,
          photos: Array,
          content: String,
          price: String,
          state: String,
          diametr: String,
          seasonality: String,
          profileWidth: String,
          profileHeight: String,
          email: String,
          location: String,
          phone: String,
        },
      },
    },

    motorbikes: {
      category_name: String,
      required: true,
      car_category: {
        type: Array,
        name: String,
        required: true,
        sub_category: {
          name: String,
          category: String,
          photos: Array,
          content: String,
          price: String,
          year: Date,
          run: String,
          brand: String,
          color: String,
          engineCapacity: String,
          email: String,
          location: String,
          phone: String,
        },
      },
    },

    motoParts: {
      category_name: String,
      required: true,
      car_category: {
        type: Array,
        name: String,
        required: true,
        sub_category: {
          name: String,
          category: String,
          photos: Array,
          content: String,
          price: String,
          state: String,
          email: String,
          location: String,
          phone: String,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
