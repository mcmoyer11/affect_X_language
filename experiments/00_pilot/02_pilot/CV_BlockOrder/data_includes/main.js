PennController.ResetPrefix(null);
DebugOff();

Sequence(
    "welcome",
    "consent",
    
        // Concreteness Block
        "instructions1_conc",
        "instructions2_conc",
        "instructions3_hands",
        "practice_intro",
        rshuffle("calibrator_conc"),
        "endinstructions",
        rshuffle("test_conc"),
    
    "mid_task_instructions",
    
        // Valence Block
        "instructions1_val",
        "instructions2_val",
        "instructions3_hands",
        "practice_intro",
        rshuffle("calibrator_val"),
        "endinstructions",
        rshuffle("test_val"),
    "demo",
    SendResults(),
    "end"
    // "prolific","bye"
    );


// What is in Header happens at the beginning of every single trial
Header(
    //We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
       .global()
   ,
    newTimer(250)
       .start()
       .wait()
);


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
    
    newText("<p>This experiment is composed of two parts. In each part, you will be asked to evaluate words presented one by one as quickly as possible. The words are the same in each part, but how you will be asked to evaluate the words will differ between the two parts.</p>")
        .settings.css("font-size","15")
        //.center()
        .print()
    ,
    newText("<p><b>It is important that you complete each part of the experiment in one go. There will be a pause in the middle, so if you need to take a break you can do so at that time.</b> </p>")
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
    );


// End screen
PennController("end",
    newText("Thank you for your participation!<br><br>")
        .center()
        .print()
        ,
    newText("link",'<a href="https://app.prolific.com/submissions/complete?cc=CHFTNE6M">Click here if you do not automatically redirect.</a><br><br>')
        .center()
        .print()
    ,
    newText("Or, enter this completion code: CHFTNE6M")
        .center()
        .print()
    ,
    newKey("end", " ")
        .wait()
).setOption("countsForProgressBar", false);

// Send results at the end of the experiment
PennController.SendResults("send");
// PennController.Finish();
    
