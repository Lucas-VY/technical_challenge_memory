import { ImageData } from "../interfaces/gameInterfaces";
import fakeImagesApi from "../images.json"; // Importación de los datos locales

export const fetchImages = async (): Promise<ImageData[]> => {
  if (process.env.NODE_ENV === "development") {
    // Si estamos en un entorno de desarrollo, usa la API falsa
    console.log("Using fakeImagesApi data");
    return fakeImagesApi;
  }

  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://challenge-uno.vercel.app/api/images"
    );
    console.log("🚀 ~ fetchImages ~ response:", response);
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // Retorna un array vacío en caso de error
  }
};
