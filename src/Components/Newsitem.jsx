import image from '../assets/image.jpg'
const Newsitem = ({title, description, src, url}) => {
    const handleImageError = (e) => {
        console.error("Failed to load image at " + e.target.src + ", switching to fallback image.");
        e.target.src = image;
      };
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src ||image}onError={handleImageError} style={{height:"200px", width:"325px"}} className="card-img-top" alt={image}/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is a report of a current event. It is information about something that has just happened."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Newsitem