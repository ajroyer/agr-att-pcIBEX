PennController.ResetPrefix(null); // Initiates PennController

// Welcome trial
PennController(
    defaultText
        .print()
    ,
    newText("<h1>Welcome!</h1>")
    ,
    newButton("Continue")
      .print()
      .wait()
)

// Consent
PennController(
    defaultText
        .print()
    ,
    newText("<h2>Consenting Process</h2>")
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

// Get participant ID

PennController(
  defaultText
    .print()
  ,
  newText("<p>Please enter your participant ID and then click the button below.</p>")
  ,
  newTextInput("ID")
      .print()
  ,
  newVar("ID")
    .settings.global()
    .set( getTextInput("ID") )
  ,
  newButton("Continue to 'Instructions'")
    .print()
    .wait()
)
.log( "ID" , getVar("ID") )

// Instructions

PennController(
  newHtml("", "")
)

// Practice trials

PennController(
  defaultText
    .print()
  ,
  newText("<center><h2> Practice </h2></center>")
  ,
  newText("<center><p> In order to familiarize yourself with the experiment, you will do 3 practice trials first. </p></center>")
)

//// Practice 1
PennController(

)

//// Practice 2
PennController(

)

//// Practice 3
PennController(

)

// Pre-experiment screen

PennController(
  newHtml("", "")
)

// Experiment
PennController.Template(
  variable => PennController(
    newAudio("sentence", variable.AudioFile)
        .play()
    ,
    newSelector()
        .settings.keys("1","2","3","4","5")
        .settings.log()
        .wait()
    ,
    getAudio("sentence")
       .wait("")
  )
  .log( "ID" , getVar("ID") )
  .log( "Item"   , variable.Item   )
  .log( "Num" , variable.Num )
  .log( "Breaks" , variable.Breaks )
  .log( "Group"  , variable.Group  )
)

// Dialect survey

//// Instructions

PennController(
  newHtml("", "")
)

//// Survey questions
PennController.Template(
  variable => PennController(
    newAudio("sentence", variable.AudioFile)
        .play()
    ,
    newSelector()
        .settings.keys("1","2","3","4","5")
        .settings.log()
        .wait()
    ,
    getAudio("sentence")
       .wait("")
  )
  .log( "ID" , getVar("ID") )
  .log( "Item"   , variable.Item   )
  .log( "Num" , variable.Num )
  .log( "Breaks" , variable.Breaks )
  .log( "Group"  , variable.Group  )
)

// Debriefing questionnaire

PennController(
  defaultText
    .print()
  ,
  newText("<center><h2>Debriefing questions</h2></center>")
  ,
  newText("<p></p>")
)

// Thank you screen
PennController.SendResults()

PennController(
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)
