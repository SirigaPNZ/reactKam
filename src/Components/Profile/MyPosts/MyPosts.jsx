import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () =>{

    let postData = [
        {id: 1, message: "Hi, my name Siriga", likeCount: 12},
        {id: 2, message: "Im 22 years old", likeCount: 13},
        {id: 3, message: "Im from Penza, study on the PSU", likeCount: 14},
        {id: 3, message: 'My dream its a work in Penza IT company "Relable Systems"', likeCount: 15},
    ]

    return(
            <div className={s.postsBlock}>
                <h3>MyPosts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post message={postData[0].message} like={postData[0].likeCount}/>
                    <Post message={postData[1].message} like={postData[1].likeCount}/>
                    <Post message={postData[2].message} like={postData[2].likeCount}/>
                    <Post message={postData[3].message} like={postData[3].likeCount}/>
                    <Post message={postData[0].message} like={postData[0].likeCount}/>
                </div>
            </div>
    )
}

export default MyPosts;