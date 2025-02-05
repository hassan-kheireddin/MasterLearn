// Function to create a new post
function addPost(name, profileImage, content) {
    const feed = document.getElementById("feed");

    // Create post container
    const post = document.createElement("div");
    post.classList.add("post");

    // Create post header (Profile Image + Name)
    const postHeader = document.createElement("div");
    postHeader.classList.add("post-header");

    // Profile image next to the name
    const profileImg = document.createElement("img");
    profileImg.src = profileImage;
    profileImg.alt = name;
    profileImg.classList.add("profile-img"); // Add a class for styling

    const h3 = document.createElement("h3");
    h3.textContent = name;

    postHeader.appendChild(profileImg);
    postHeader.appendChild(h3);

    // Create post content below the name
    const postContent = document.createElement("p");
    postContent.textContent = content;

    // Create the main image under the content
    const img = document.createElement("img");
    img.src = profileImage; // Or another image source if needed
    img.alt = "Post Image";
    img.classList.add("post-image"); // Add a class for styling

    // Create an <hr> element
    const hr = document.createElement("hr");

    // Create action buttons
    const postActions = document.createElement("div");
    postActions.classList.add("post-actions");

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-btn");
    likeButton.innerHTML = "👍 Like";

    const commentButton = document.createElement("button");
    commentButton.classList.add("comment-btn");
    commentButton.innerHTML = "💬 Comment";

    const repostButton = document.createElement("button");
    repostButton.classList.add("repost-btn");
    repostButton.innerHTML = "🔄 Repost";

    postActions.appendChild(likeButton);
    postActions.appendChild(commentButton);
    postActions.appendChild(repostButton);

    // Assemble post
    post.appendChild(postHeader);
    post.appendChild(postContent);
    post.appendChild(img);
    post.appendChild(hr);
    post.appendChild(postActions);

    // Add to feed
    feed.appendChild(post);
}

// Example: Adding posts dynamically
addPost("John Doe", "../images/backend.jpg", "Excited to join this amazing community! 🚀");
addPost("Jane Smith", "images/user2.jpg", "Learning new things every day. Keep growing! 🌱");
addPost("Mike Johnson", "images/user3.jpg", "Just finished an awesome project! Can't wait to share it. 💡");
addPost("Sarah Lee", "images/user4.jpg", "Networking with like-minded people is the key to success! 🤝");
addPost("David Brown", "images/user5.jpg", "Does anyone have good book recommendations for personal growth? 📚");

