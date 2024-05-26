const API_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
import placeholder from "../assets/images/no-movie.png";

export default function getImageLink(imagePath) {
  if (imagePath) {
    return API_IMAGE_BASE_URL + imagePath.replace("/", "");
  } else {
    return placeholder;
  }
}