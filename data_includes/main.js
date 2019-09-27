PennController.ResetPrefix(null); // Initiates PennController

// Start typing your code here
PennController(
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will have to report which of two pictures matches a description.</p>")
    ,
    newText("<p>Press the <strong>F</strong> key for the picture on the left, or the <strong>J</strong> key for the picture on the right.</p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID") )
)
.log( "ID" , getVar("ID") )

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
