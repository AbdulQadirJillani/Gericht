import video from '@/assets/meal.mp4'

const Video = () => {
  return (
    <video loop autoPlay muted>
        <source src={video} type="video/mp4"/>
    </video>
)
}

export default Video