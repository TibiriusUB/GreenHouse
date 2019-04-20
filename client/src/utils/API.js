import axios from "axios";

export default {
  // Gets all books
  getPlants: function () {
    return axios.get("/api/plant");
  },
  // Gets the book with the given id
  getPlant: function (id) {
    return axios.get("/api/plant/" + id);
  },
  // Deletes the book with the given id
  deletePlant: function (id) {
    return axios.delete("/api/plant/" + id);
  },
  // Saves a book to the database
  savePlant: function (plantData) {
    return axios.post("/api/plant", plantData);
  },
  // searches GoogleBooks
  getPlantSearch: function (searchData) {
    return axios.get("/search/web", { params: { q: searchData } })
  },
  // searches GoogleBooks for a specific book
  savePlantSearch: function (searchID) {
    return axios.get("/search/web/" + searchID);//, { params: searchID })
  },
};
