const posts = [
    {
        name: "george-springer4",
        username: "george-springer4",
        location: "Toronto, Ontario",
        avatar: "imgs/springer.webp",
        post: "imgs/Home Run GIF by MLB.gif",
        caption: "WOOOOOO",
        likes: "2,546,093"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "imgs/avatar-courbet.jpg",
        post: "imgs/post-courbet.jpg",
        caption: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "imgs/avatar-ducreux.jpg",
        post: "imgs/post-ducreux.jpg",
        caption: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsSection = document.getElementById("posts-section");

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

    <img src="${posts[i].post}" class="post-img" >
    <img src="imgs/icon-heart.png" class="icon-img">
    <img src="imgs/icon-comment.png" class="icon-img">
    <img src="imgs/icon-dm.png" class="icon-img">
    <p class="likes-count">${posts[i].likes} likes</p>
    <p class="caption"><span class="caption-username">${posts[i].username}</span> ${posts[i].caption}</p>
    `
    }
}

renderPosts();

