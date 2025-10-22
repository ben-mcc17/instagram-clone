const posts = [
    {
        username: "george-springer4",
        location: "Toronto, Ontario",
        avatar: "imgs/springer.webp",
        post: "imgs/Home Run GIF by MLB.gif",
        caption: "WOOOOOOOOO",
        likes: "2,457,315"
    },
    {
        username: "VladdyJr27",
        location: "Toronto, Ontario",
        avatar: "imgs/vladdy.webp",
        post: "imgs/Home Run Baseball GIF by MLB.gif",
        caption: "That feeling when you going to the world series",
        likes: "3,547,234"
    },
    {
        username: "Mad_Max31",
        location: "Seattle, Washington",
        avatar: "imgs/max-pfp.webp",
        post: "imgs/max-yelling.gif",
        caption: "I was not getting off that mound",
        likes: "2,374,239"
    }
]

const postsSection = document.getElementById("posts-section")


function renderPosts() {
    for (let i=0; i < posts.length; i++) {

        postsSection.innerHTML += `
        <div class="profile-header">
            <img class="poster-pic" src="${posts[i].avatar}">
            <div class="poster-info-container">
                <p class="poster-username">${posts[i].username}</p>
                <p class="post-location">${posts[i].location}</p>
            </div>
        </div>

        <img src="${posts[i].post}" class="post-img"">
        <img src="imgs/icon-heart.png" class="icon-img">
        <img src="imgs/icon-comment.png" class="icon-img">
        <img src="imgs/icon-dm.png" class="icon-img">
        <p class="likes-count">${posts[i].likes} likes</p>
        <p class="caption"><span class="caption-username">${posts[i].username}</span> ${posts[i].caption}</p>
        
        `

    }
}

renderPosts()
