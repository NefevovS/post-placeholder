import axios from "axios";

export class PostService{
    static async  getPosts(page=1,limit=10){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/",{
            params:{
                _page:page,
                _limit:limit
            }
        })
        return response
    }

}