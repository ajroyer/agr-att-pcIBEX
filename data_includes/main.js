
//PennController.Sequence( "consent" );
PennController.ResetPrefix(null);

// Consent
PennController( "consent",
    defaultText
        .print()
    ,
    newText("<h2>Consenting Process</h2>")
    ,
    newText("<p> Below is a consent form you will need to read. After reading, please press the 'I consent to participating' button. If you do not consent, please close the page</p>")
    ,
    newHtml("consentform", "consent.html")
        .print()
    ,
    newButton("I consent to participating")
        .print()
        .wait()
)
