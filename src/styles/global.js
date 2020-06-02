import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: 0;
    /* box-sizing: border-box; */
}
*:focus{
    outline: 0;
}
html, body, #root {
    height: 100%;
    font-size: 60.5%;


}
body{
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font: 14px 'Roboto', sans-serif;
}
a {
   text-decoration: none;
}
ul {
    list-style: none;
}
button {
    cursor: pointer;
}



/* ///////// */
@media (max-width: 1496px){
html {
        font-size: 50%;
    }

body, #root{


    /* DASHBOARD */
div.sc-fzplWN{
    overflow: auto;
    ul {
        grid-template-columns: repeat(5,1fr);

        }
}

/* SEARCH PAGE */
div.sc-fzqNJr{
    overflow: auto;
    ul {
        grid-template-columns: repeat(5,1fr);

        }
}


/* FRIEND PAGE */
div.sc-fzoiQi{
    overflow: auto;

    ul {
        grid-template-columns: repeat(5,1fr);

        }
}

}

}


/* //// */

@media (max-width: 1360px){
html {
        font-size: 50%;
    }

body, #root{


    /* Background PAGE */
div.sc-AxmLO{
    height: 140vh;
    }

    /* Menu */
div.sc-AxgMl a {
    font-size: 1.1rem;
}

    /* DASHBOARD */
div.sc-fzplWN{
height: 65%;
overflow: auto;

    ul {
        grid-template-columns: repeat(14,1fr);
        overflow: auto;
        /* font-size: 60%; */
        }
}

/* SEARCH PAGE */
div.sc-fzqNJr{
    height: 65%;
    overflow: auto;
    ul {
        grid-template-columns: repeat(14,1fr);
        overflow: auto;
        /* font-size: 60%; */
        }
    }


/* FRIEND PAGE */
div.sc-fzoiQi{
    height: 65%;
    overflow: auto;
    ul {
        grid-template-columns: repeat(14,1fr);
        overflow: auto;
        /* font-size: 60%; */
        }
    }
}

}

.Toastify {
font-size: 1.4rem;
}

`;
