import axios from "axios";


const ItemsListApi = () =>
  axios
    .get(
      `https://systemapi.prod.ashish.me/shorten`
    )
    .then(result => {
      return result.data;
    });

export default ItemsListApi;
