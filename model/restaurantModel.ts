import { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    address: {
        type: String,
        required: true,
    },
    menu: {
        breakfast: [
            {
                name: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: String,
                    required: true,
                },
                for: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String,
                    required: true,
                },
                ingredients: [
                    {
                        type: String,
                        required: true,
                    },
                ],
            },
        ],
        lunch: [
            {
                name: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: String,
                    required: true,
                },
                for: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String,
                    required: true,
                },
                ingredients: [
                    {
                        type: String,
                        required: true,
                    },
                ],
            },
        ],
        dinner: [
            {
                name: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: String,
                    required: true,
                },
                for: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String,
                    required: true,
                },
                ingredients: [
                    {
                        type: String,
                        required: true,
                    },
                ],
            },
        ],
    },
});

export const Restaurant = model("restaurant", restaurantSchema);
