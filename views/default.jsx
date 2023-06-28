const React = require('react')

function Def (html){
    return(
        <html lang="en">
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <div class="wrapper">
                    <a href="https://www.linkedin.com/in/salazar-jason/">Linkedin</a>
                    <br></br>
                    <a href="https://github.com/Jasonsal23">GITHUB</a>
                <div class ="push"></div>
                </div>
                <footer class="footer"></footer>
                
            </body>
        </html>
    )
}

module.exports =Def