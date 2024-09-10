import { ImageData } from "../interfaces/gameInterfaces";
import fakeImagesApi from "../utils/images.json"; // mock apiImages

export const fetchImages = async (): Promise<ImageData[]> => {
  console.log("Current REACT_APP_ENV:", process.env.REACT_APP_ENV);

  if (process.env.REACT_APP_ENV === "development") {
    console.log("Using fakeImagesApi data");
    return fakeImagesApi;
  }

  try {
    // Usa la variable de entorno para la URL de la API
    const apiUrl = process.env.REACT_APP_API_URL;

    if (!apiUrl) {
      throw new Error("REACT_APP_API_URL is not defined");
    }

    const response = await fetch(`${apiUrl}/api/images`);

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
