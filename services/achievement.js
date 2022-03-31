import axios from "axios";

export async function AllAchievement() {
  const response = await axios.get("http://tssabes.my.id/api/daftar-prestasi/");
  const dataList = response.data;
  return dataList.data;
}

export async function AchievementSD() {
  const response = await axios.get(
    "http://tssabes.my.id/api/daftar-prestasi/sd"
  );
  const dataListSD = response.data;
  return dataListSD.data;
}

export async function AchievementRemaja() {
  const response = await axios.get(
    "http://tssabes.my.id/api/daftar-prestasi/remaja"
  );
  const dataListRemaja = response.data;
  return dataListRemaja.data;
}

export async function DaftarGallery() {
  const response = await axios.get("http://tssabes.my.id/api/daftar-gallery");
  const listGallery = response.data;
  return listGallery.data;
}
