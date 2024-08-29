import { anime, animeList } from "./staticData";

const api = {
    async getMainPageAnime():Promise<anime[]>{
        return animeList
    }
}

export default api