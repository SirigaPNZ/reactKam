import s from './Post.module.css'

const Post = (props) =>{
    return(
        <div className={s.item}>
            <img src='https://yt3.ggpht.com/a/AGF-l7_L9p3z2QK9sJU3g4Qaz3js3v-eNepUS-j-UA=s900-c-k-c0xffffffff-no-rj-mo'/>
            {props.message}
            <div>
                {props.like}
                <span> like's</span>
            </div>
        </div>
    )
}

export default Post;