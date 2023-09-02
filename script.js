(async function () {

    async function fetchDataFromApi(search_result="all"){
        let response = await fetch(
            `https://newsapi.org/v2/everything?q=${search_result}&apiKey=f4f241ef4a2447f39d84d957a68f81a9`
        );
        let data = await response.json();
        let articles = data.articles;
    
        articles.map((articles) => {
            console.log(articles);
        });

        articles.forEach((articles) => {
            let card = document.createElement("div");
            let card_header = document.createElement("div");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            let p_ = document.createElement("p");
            let card_cover = document.createElement("div");
            let img = document.createElement("img");
            let card_content = document.createElement("div");
            let timePost = document.createElement("small");
            let ref = document.createElement("a");
    
            let hr = document.createElement("hr");
            let hr_ = document.createElement("hr");
    
            card.setAttribute("class", "card");
            card_header.setAttribute("class", "card_header");
            card_cover.setAttribute("class", "card_cover");
            card_content.setAttribute("class", "card_content");
    
            h2.innerText = `${articles.title}`;
            p_.innerText = `${articles.author}`;
    
            card_header.appendChild(h2);
            card_header.appendChild(p_);
    
            card_header.appendChild(hr);
    
            img.src = `${articles.urlToImage}`;
            img.alt = `${articles.urlToImage}`;
    
            card_cover.appendChild(img);
    
            p.innerText = `${articles.content}`;
            timePost.innerText = `${articles.publishedAt}`;
            ref.innerText = `Reference: ${articles.url}`;
            ref.href = articles.url;
            ref.target = "_blank";
            card_content.appendChild(p);
            card_content.appendChild(timePost);
            card_content.appendChild(hr_);
            card_content.appendChild(ref);
    
            card.appendChild(card_header);
            card.appendChild(card_cover);
            card.appendChild(card_content);
    
            document.getElementsByClassName("card_container")[0].appendChild(card);
        });
    }

    function renderAboutPage() {
        document.getElementsByClassName("about_container")[0].innerHTML = `
            <div class="header_container">
                <h2>About this Site</h2>
            </div>
            <div class="paragraph_container">
                <p>This site created by EarthStrix (3rd year Computer Engineering Student) to be JavScript Mini Project</p>
                <p>All a news data ,We're fetching data from newsApi ,using fetch method</p>
                <p>I hope this project will be case study for web development</p>
            </div>
            <div class="icon_container_main">
                <div class="icon_container_header">
                    <h3>Tech Stack</h3>
                </div>
                <div class="icon_container">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                    </svg>
                </div>
            </div>
        `
    }

    document.body.onload = fetchDataFromApi()

    document.getElementsByName('search_topic_form')[0].addEventListener('submit',async(event) => {
        event.preventDefault()
        let search_result = document.forms['search_topic_form']['search_topic_input'].value
        
        document.getElementsByClassName("card_container")[0].innerHTML = ""

        fetchDataFromApi(search_result)
    })

    document.getElementById("home").onclick = async function () {
        document.getElementsByClassName("card_container")[0].innerHTML = "";

        fetchDataFromApi()
    };

    document.getElementById("popular").onclick = async function () {
        document.getElementsByClassName("card_container")[0].innerHTML = "";

        fetchDataFromApi("popular")
    };

    document.getElementById("entertainment").onclick = async function () {
        document.getElementsByClassName("card_container")[0].innerHTML = "";

        fetchDataFromApi("entertainment")
    };

    document.getElementById("political").onclick = async function () {
        document.getElementsByClassName("card_container")[0].innerHTML = "";

        fetchDataFromApi("political")
    };

    document.getElementById("science").onclick = async function () {
        document.getElementsByClassName("card_container")[0].innerHTML = "";

        fetchDataFromApi("science")
    };

    document.getElementById('about').onclick = function () {
        document.getElementsByClassName("card_container")[0].innerHTML = "";

        renderAboutPage()
    }
})();
