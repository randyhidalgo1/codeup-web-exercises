@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap');

* {
    box-sizing: border-box;
}

img {
    display: block;
    max-width: 100%;
    width: 100%;
}

/*.example {*/
/*    background-color: red;*/
/*    width:  400px;*/
/*    height: 400px;*/
/*    padding: 20px;*/
/*}*/

body {
    margin: 0px;
    padding:20px;
    font-family: Roboto, sans-serif;
}

h1, h2 {
    font-family: sans-serif;
}

.header1 {
    font-size: 50px;
    background: #f1f1f1;
    margin-bottom: 0px;
    transition: all ease 5s;
    font-weight: 100;
    /*text-align: center;*/
    /*color: purple;*/
    /*transition: all ease .3s;*/
}

.header1:hover {
    color: red;
}

.text-center {
    text-align: center;
}

header p {
    color: #4d4d4d;
}

header {

    padding: 20px;
    border-bottom: 1px solid #000000;
}

main {
    padding: 20px;
}
.features-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
}

.photos-wrapper {
    display:flex;
    max-width: 100vw;
}
.photo-wrapper{
    flex: 1 0;
    min-width: 1;
    aspect-ratio: 4/3;
}

.photo-wrapper img {
    transition: all ease .3s;
}

.photo-wrapper:hover {
    transform: scale(1.1);
}

.photos-wrapper .photo-wrapper img {
    aspect-ratio: 4/3;
    object-fit: cover;

}

[data-features] {
    opacity .5;
}

.features-container ul li:nth-child(2) {
    color: red;
}
