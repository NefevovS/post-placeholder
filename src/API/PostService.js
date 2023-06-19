import axios from "axios";

export class PostService{
    static async  getPosts(page=1,limit=10){
       return await axios.get("https://jsonplaceholder.typicode.com/posts1/",{
            params:{
                _page:page,
                _limit:limit
            }
        }).then(response=>({response})).catch(error=>({error}))


    }

}