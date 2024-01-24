class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: "open"
        });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "By anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720"
        newsImage.alt = "photo do louco";
        newsImage.width ="350"

        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot
    }

    styles() {
        const styles = document.createElement("style");
        styles.textContent = `
      
.card {
    width: 720px;
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}

.card__left>h1 {
    margin-top: 15px;
    font-size: 25px;
    font-weight: 700;
}

.card__left>span {
    font-weight: 300;
}

.card__left a {
    color: rgb(75, 37, 110);
    list-style: none;
    text-decoration: none;
}


.card__left p {
    color: gray;

}
        `

        return styles

    }

}

customElements.define("card-news", Cardnews);