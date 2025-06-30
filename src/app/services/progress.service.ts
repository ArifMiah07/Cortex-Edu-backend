
import { IProgress, Progress } from '../model/progress.model';

export const ProgressService = {
  getUserProgress: async (userId: string, courseId: string): Promise<IProgress | null> => {
    return await Progress.findOne({ userId, courseId });
  },

  markLectureComplete: async (payload: IProgress): Promise<IProgress> => {
  const { userId, courseId, currentLecture, progressPercentage } = payload;

  let progress = await Progress.findOne({ userId, courseId });

  if (!progress) {
    // Create new progress
    progress = await Progress.create({
      userId,
      courseId,
      completedLectures: [currentLecture],
      currentLecture,
      progressPercentage,
    });
  } else {
    // Convert ObjectId to string for comparison
    const isAlreadyCompleted = progress.completedLectures.some(
      lectureId => lectureId.toString() === currentLecture.toString()
    );

    if (!isAlreadyCompleted) {
      progress.completedLectures.push(currentLecture);
    }

    progress.currentLecture = currentLecture; 
    progress.progressPercentage = progressPercentage;

    await progress.save();
  }

  return progress;
},


  updateProgress: async (payload: Partial<IProgress>): Promise<IProgress | null> => {
    const { userId, courseId } = payload;

    if (!userId || !courseId) throw new Error("userId and courseId are required to update progress");

    const updatedProgress = await Progress.findOneAndUpdate(
      { userId, courseId },
      payload,
      { new: true }
    );

    return updatedProgress;
  },
};
