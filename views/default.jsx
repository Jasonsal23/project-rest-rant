const React = require('react')

function Def (html){
    return(
        <html lang="en">
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports =Def