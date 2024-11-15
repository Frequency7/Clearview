// Example multimedia data (you can replace this with an API fetch)
const multimediaData = [
    {
        title: "Exploring the Latest Tech Trends",
        url: "https://www.youtube.com/embed/ub27Ol4igwY?si=NEjkE_p3zAbYl-iA", // Replace with video URL
        type: "video"
    },
    
    {
        title: "Exploring the Latest Business Trends",
        url: "https://www.youtube.com/embed/7cAqQ-Cuww0?si=o74E4TB61l2Fb251",
        type: "video"
    },
    
    {
        title: "Exploring the Latest Sports Trends",
        url: "https://www.youtube.com/embed/Ci-Lhmd4XeQ?si=3q74LrlR8cxh_QfI" ,
        type: "video"
    },

    {
        title: "Exploring the Latest Education Trends",
        url: "https://www.youtube.com/embed/9hsh3i1iQ_U?si=UY0pTMHFoQzs3aAY",
        type: "video"
    },

    {
        title: "Exploring the Latest Environments Trends",
        url: "https://www.youtube.com/embed/em3y6wCIRjY?si=GMGsXIaGyZ-2W3HT",
        type: "video"
    },

    {
        title: "Exploring the Latest Health Trends",
        url: "https://www.youtube.com/embed/LXrh2AJa8nU?si=joznL6bVfMyBMBmJ",
        type: "video"
    },

    {
        title: "Exploring the Latest Entertainment Trends",
        url: "https://www.youtube.com/embed/gBd7gmwLCI0?si=qMpaG_4lpdLaYFaS",
        type: "video"
    },

    
    {
        title: "Exploring the Latest Science Trends",
        url: "https://www.youtube.com/embed/SF6OhyCwMTw?si=yxSlRinuDrXuSKsO",
        type: "video"
    },

    
    {
        title: "Exploring the Latest Politic Trends",
        url:   "https://www.youtube.com/embed/9yx_re0FyZM?si=p1NEyGv_jsDwajFE",
        type: "video"
    },
];

// Function to display multimedia content
function displayMultimedia() {
    const multimediaGrid = document.getElementById('multimedia-grid');
    multimediaGrid.innerHTML = ''; // Clear existing content

    multimediaData.forEach(item => {
        const multimediaCard = document.createElement('div');
        multimediaCard.classList.add('multimedia-card');

        if (item.type === "video") {
            multimediaCard.innerHTML = `
                <h3>${item.title}</h3>
                <iframe width="100%" height="200" src="${item.url}" frameborder="0" allowfullscreen></iframe>
            `;
        } else if (item.type === "image") {
            multimediaCard.innerHTML = `
                <h3>${item.title}</h3>
                <img src="${item.url}" alt="${item.title}">
            `;
        }

        multimediaGrid.appendChild(multimediaCard);
    });
}

// Call the displayMultimedia function when the page loads
window.onload = displayMultimedia;
