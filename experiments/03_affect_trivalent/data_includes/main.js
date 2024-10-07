PennController.ResetPrefix(null)

// Sequence(
//     // "intro","Consent","Participantid","Questionsparticipant","game1","counter","instructions","instructions2",
//     // "endintructions",
//     // "warmup1","mid warmup","vartest","warmup2","end of warmup",
//     // "reminder",
//     "instructions1", "instructions2","endinstructions",
//     randomize("test"),
//     // "debrief",
//     SendResults(),"prolific","bye")
Sequence(
    "welcome",
    "consent",
    "instructions1",
    "instructions2",
    "instructions3",
    "endinstructions",
    randomize("test"),
    "demo",
    // "debrief",
    SendResults(),"prolific","bye")


// What is in Header happens at the beginning of every single trial
Header(
    //We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
       .global()
   ,
    newTimer(250)
       .start()
       .wait()
)


newTrial( "welcome" ,
    newImage("paris-labs.png")
        .size( 400,100 )      // Resize the image to 150x250px
        .center()
        .print(),
    newText("<b>WELCOME</b>")
        .settings.css("font-size","30")
        .center()
        .print()
    ,
    newText("<p>The following experiment is conducted by a collaboration between the Sorbonne University, the École Normale Superieur, and the Centre National de la Recherche Scientifique.</p>")
        .settings.css("font-size","15")
        .center()
        .print()
    ,
    newText("<p>You will see words presented one by one, and be asked to evaluate them as quickly as possible.</p>")
        .settings.css("font-size","15")
        //.center()
        .print()
    ,
    newText("<p><b>It is important that you complete the experiment in one go.</b> </p>")
        .settings.css("font-size","15")
        .center()
        .print()
    ,
    newText("<p>Before continuing, please make sure that you are in a calm and quiet environment. The task will require your full attention and concentration. Please remove any potential source of distraction and turn off any sound system around you (please mute speakers, put phone on silence mode, turn the TV off, etc).</p>")
        .settings.css("font-size","15")
        .center()
        .print()
    ,
    newButton("next", "Continue")
        .center()
        .print()
        .wait()
    )
