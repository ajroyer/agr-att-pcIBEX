// Sequence of trials
//PennController.Sequence( "setcounter", "welcome" , "consent" , "instructions" , randomize("picture") , randomize("rating") , "debriefing" , "send" , "exit" );
//PennController.ResetPrefix(null);

PennController.Sequence( "setcounter", "consent", rshuffle( startsWith("fill") , rshuffle(startsWith("crit_e"),startsWith("crit_n"),startsWith("crit_n")) ) , "send" , "exit" );
PennController.ResetPrefix(null);


// Increment counter
PennController.SetCounter( "setcounter" );

PennController.SendResults( "send" );

// Welcome trial
//PennController( "welcome",
//    defaultText
//       .print()
//    ,
//    newText("<h1>Welcome!</h1>")
//    ,
//    newButton("Continue")
//      .print()
//      .wait()
//)



// Consent
PennController( "consent",
    defaultText
        .print()
    ,
    newText("<h2>Consenting Process</h2>")
    ,
    newText("<p> Below is a consent form you will need to read. After reading, please press the 'I consent to participating' button. If you do not consent, please close the page</p>")
    ,
    newHtml("consent", "consent.html")
        .print()
    ,
    newButton("I consent to participating")
        .print()
        .wait()
)
.log( "uniqueid" , PennController.GetURLParameter( "id" ) )

// Instructions

//PennController( "instructions",
//  newHtml("", "")
//)

// Practice trials

//PennController( "practiceInstructions",
//  defaultText
//    .print()
//  ,
//  newText("<center><h2> Practice </h2></center>")
//  ,
//  newText("<center><p> In order to familiarize yourself with the experiment, you will do 3 practice trials first. </p></center>")
//)

//// Practice 1


//// Practice 2


//// Practice 3


// Pre-experiment screen

//PennController( "preExperimentScreen",
//  newHtml("", "")
//)

// Experiment
PennController.Template( PennController.GetTable( "test-design.csv" ) ,
  row => PennController( "rating",
    newAudio("audioFilename", row.wavname)
        .play()
    ,
    newScale("1 very unacceptable","","3 unsure","","5 very acceptable")
        .settings.log()
        .settings.keys("1","2","3","4","5")
        .settings.labelsPosition("top")
        .settings.size("auto")
        .print()
        .wait()
    ,
    getAudio("sentence")
       .wait("")
  )
//  .log( "ID" , getVar("ID") )
  .log( "Item"   , row.item   )
  .log( "BreakLoc" , row.breakLoc )
  .log( "Plurality" , row.plurality )
  .log( "Grammaticality"  , row.grammaticality  )
  .log( "Condition" , row.cond )
  .log( "AudioFile", row.wavname )
)

// Dialect survey

//// Instructions

//PennController(
//  newHtml("", "")
//)

//// Survey questions
//PennController.Template(
//  variable => PennController(
//    newAudio("sentence", variable.AudioFile)
//        .play()
//    ,
//    newSelector()
//        .settings.keys("1","2","3","4","5")
//        .settings.log()
//        .wait()
//    ,
//    getAudio("sentence")
//       .wait("")
//  )
//  .log( "ID" , getVar("ID") )
//  .log( "Item"   , variable.Item   )
//  .log( "Num" , variable.Num )
//  .log( "Breaks" , variable.Breaks )
//  .log( "Group"  , variable.Group  )
//)

// Debriefing questionnaire

//PennController(
//  defaultText
//    .print()
//  ,
//  newText("<center><h2>Debriefing questions</h2></center>")
//  ,
//  newText("<p></p>")
//)

// Thank you screen

PennController( "exit" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)
