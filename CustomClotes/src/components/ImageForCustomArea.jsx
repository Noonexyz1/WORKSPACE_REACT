
function ImageForCustomArea(props){
    return (
        <div>
            <img
                src={props.imageSrc}
                alt="Image to edit"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
    )
}

export default ImageForCustomArea;