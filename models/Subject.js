import mongoose from "mongoose";
import Semester from "./Semester.js";

const subjectSchema = new mongoose.Schema({
    semId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Semester",
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    descrip: {
        type: String,
        trim: true
    },
    status: {
        type: Number,
        required: true
    },
    difficulty: Number,
    grade: Number,
    like: Boolean,
    filePath: String,
},
    { timestamps: true, }
);

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;