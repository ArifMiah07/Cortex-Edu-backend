import AppError from "../errors/AppError";
import { Course, ICourse } from "../model/courses.model";
import httpStatus from 'http-status';


// create course
const createCourseIntoDb = async (payload: ICourse) => {
    const exists = await Course.findOne({
    title: payload.title,
    description: payload.description,
    price: payload.price,
    createdBy: payload.createdBy,
    isDeleted: false,
  });


  if (exists) {
    throw new AppError(httpStatus.CONFLICT, 'This Course already exists!');
  }
  const result = await Course.create(payload);
  return result;
};

const getAllCoursesFromDb = async () => {
    // todo:////
  const result = await Course.find();
  return result;
};

const getSingleCourseFromDb = async (id: string) => {
  const result = await Course.findById(id);
   if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Course not found!');
  }
  return result;
};

const updateCourseInDb = async (id: string, payload: Partial<ICourse>) => {
  const result = await Course.findByIdAndUpdate(id, payload, { new: true, runValidators: true, });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Course not found!');
  }
  return result;
};

// soft delete
const deleteCourseFromDb = async (id: string) => {
  const deletedCourse = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!deletedCourse) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete Course');
  }

  return deletedCourse;
};

export const courseServices = {
  createCourseIntoDb,
  getAllCoursesFromDb,
  getSingleCourseFromDb,
  updateCourseInDb,
  deleteCourseFromDb,
};
