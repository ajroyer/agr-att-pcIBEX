PennController.ResetPrefix(null); // Initiates PennController

// Start typing your code here
PennController(
    defaultText
        .print()
    ,
    newText("<h1>Welcome!</h1>")
    ,
    newText("<p> Below is a consent form you will need to read. After reading, please press the "I consent to participating" button. If you do not consent, please close the page</p>")
    ,
    newHtml("consent", "consent.html")
        .print()
    ,
    newButton("I consent to participating")
        .print()
        .wait()
)

PennController(
    newText("The fish swim in a tank which is perfectly round")
        .print()
    ,
    newImage("two", "2fishRoundTank.png")
        .settings.size(200,200)
//        .print()
    ,
    newImage("one", "1fishSquareTank.png")
        .settings.size(200,200)
//        .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("two") )
        .settings.add( 250 , 0 , getImage("one") )
        .print()
    ,    
    newKey("FJ")
        .settings.log()
        .wait()
)
