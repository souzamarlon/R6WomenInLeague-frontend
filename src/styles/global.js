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
@media (max-width: 1496px){
    html{

    font-size: 50%;
    /* height: 100%; */

    /* DASHBOARD */
    .pbVmM {
        overflow: auto;

    }
    .bDsmxU {
        grid-template-columns: repeat(5,1fr);
        /* font-size: 60%; */
    }

    /* SEARCH PAGE */
    .hVuirm{
        overflow: auto;

    }
    .ewyzk{
        grid-template-columns: repeat(5,1fr);
        /* font-size: 60%; */
    }

    }

}

@media (max-width: 1360px){
    html{
    font-size: 40%;

    /* DASHBOARD */
    .pbVmM {
        height: 65%;
        overflow: auto;

    }
    .bDsmxU{
        grid-template-columns: repeat(14,1fr);
        overflow: auto;
        /* font-size: 60%; */
    }

    /* SEARCH PAGE */
    .hVuirm{
        overflow: auto;

    }
    .ewyzk{
        grid-template-columns: repeat(3,1fr);
        /* font-size: 60%; */
    }

    }
}
.Toastify {
    font-size: 1.4rem;
}
`;
