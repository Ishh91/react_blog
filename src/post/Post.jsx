import "./post.css"

export default function Post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                alt=''
            />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'> Music </span>
                    <span className='postCat'> Life </span>

                </div>
                <span className='postTitle'>
                    Lorem ipsum dolor sit
                </span>
                <hr />
                <span className='postDate' >
                    1 hr ago
                </span>

                <p className="postDesc">
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
