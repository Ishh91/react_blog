import "./SinglePost.css"


export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                className="singlePostImg"
                    src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                <div className=" singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i> 
                </div>

                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Ishant</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className="singlePostDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum..
                </p>
                
            </div>

        </div>
    )
}
