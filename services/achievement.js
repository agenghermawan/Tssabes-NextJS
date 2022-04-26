import axios from "axios";
import { csrfToken } from "next-csrf";

export async function AllAchievement() {
  const response = await axios.get(
    "https://pusbindiklat-gemilang.com/api/daftar-prestasi/"
  );
  const dataList = response.data;
  return dataList.data;
}

export async function AchievementSD() {
  const response = await axios.get(
    "https://pusbindiklat-gemilang.com/api/daftar-prestasi/sd"
  );
  const dataListSD = response.data;
  return dataListSD.data;
}

export async function AchievementRemaja() {
  const response = await axios.get(
    "https://pusbindiklat-gemilang.com/api/daftar-prestasi/remaja"
  );
  const dataListRemaja = response.data;
  return dataListRemaja.data;
}

export async function DaftarGallery() {
  const response = await axios.get(
    "https://pusbindiklat-gemilang.com/api/daftar-gallery"
  );
  const listGallery = response.data;
  return listGallery.data;
}

export async function signUp(data) {
  // const response = await fetch("http://127.0.0.1:8000/api/daftar-ulang", {
  //   mode: "no-cors",
  //   headers: {
  //     "XSRF-TOKEN": csrfToken,
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     "X-Requested-With": "XMLHttpRequest",
  //   },
  //   method: "post",
  //   body: JSON.stringify(data),
  // });
  // const response = await axios.post(
  //   "http://127.0.0.1:8000/api/daftar-ulang",
  //   data
  // );
}
