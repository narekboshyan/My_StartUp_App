"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const mongoose_1 = require("mongoose");
const restaurantSchema = new mongoose_1.Schema({
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
exports.Restaurant = (0, mongoose_1.model)("restaurant", restaurantSchema);
