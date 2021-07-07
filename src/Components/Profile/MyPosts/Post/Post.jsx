import s from './Post.module.css'

const Post = (props) =>{
    return(
        <div className={s.item}>
            {props.message}
            Commit changes
            <div>
                {props.like}
                <span> like's</span>
            </div>
        </div>
    )
}

export default Post;