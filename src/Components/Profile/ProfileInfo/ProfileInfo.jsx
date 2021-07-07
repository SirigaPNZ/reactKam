import s from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img src='https://img-fotki.yandex.ru/get/4519/27946702.54/0_cec1c_8bcb9303_orig.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src='https://www.zastavki.com/pictures/1024x1024/2014/Animals___Cats_Yellow-eyed_American_Shorthair_092089_31.jpg'/>
            </div>
        </div>
    )
}

export default ProfileInfo;