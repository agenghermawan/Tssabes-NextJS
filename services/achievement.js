import axios from "axios";

export async function AllAchievement() {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/daftar-prestasi/"
  );
  const dataList = response.data;
  return dataList.data;
}

export async function AchievementSD() {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/daftar-prestasi/sd"
  );
  const dataListSD = response.data;
  return dataListSD.data;
}

export async function AchievementRemaja() {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/daftar-prestasi/remaja"
  );
  const dataListRemaja = response.data;
  return dataListRemaja.data;
}
