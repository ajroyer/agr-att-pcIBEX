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

// Instructions

// Trial template

PennController.Template(
  variable => PennController(
    newAudio("sentence", variable.AudioFile)
        .play()
    ,
    newText(variable.sentence)
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
  .log( "Ending" , variable.Ending )
  .log( "Group"  , variable.Group  )
)

// Practice trials

// Pre-experiment screen

// Experiment

// Dialect survey

// Debriefing questionnaire

// Thank you screen
