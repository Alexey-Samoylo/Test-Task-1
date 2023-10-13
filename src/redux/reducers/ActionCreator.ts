import axios from "axios"
import { IDataItems } from "../models/IItems"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchItems = createAsyncThunk(
    'items/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IDataItems>('https://cloud.feedly.com/v3/streams/contents?streamId=feed/https://www.fca.org.uk/news/rss.xml&unreadOnly=False')
            return response.data.items
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить данные.')
        }
    }
)