import axios from "axios";

export async function addRecord(f: any) {
  await axios.post("https://item.dustella.net/addNewRecord",f);
}

export async function returnItem(itemId: number) {}
