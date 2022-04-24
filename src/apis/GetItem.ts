import axios from "axios";

export async function GetAllitems() {
    const res = await axios.get(`https://item.dustella.net/getAllItems`)
    return res.data
}

export async function GetItemById(id: number):Promise<any> {
    const res = await axios.get(`https://item.dustella.net/getItemById?id=${id}`)
    return res.data
}