import { ImageData } from "../interfaces/gameInterfaces";
import fakeImagesApi from "../utils/images.json"; // mock apiImages

export const fetchImages = async (): Promise<ImageData[]> => {
  console.log("Current REACT_APP_ENV:", process.env.REACT_APP_ENV);

  if (process.env.REACT_APP_ENV === "development") {
    console.log("Using fakeImagesApi data");
    return fakeImagesApi;
  }

  try {
    const response = await fetch("https://challenge-uno.vercel.app/api/images");
    console.log("🚀 ~ fetchImages ~ response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
