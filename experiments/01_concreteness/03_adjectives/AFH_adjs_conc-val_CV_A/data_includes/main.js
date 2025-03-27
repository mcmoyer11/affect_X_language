PennController.ResetPrefix(null);
DebugOff();

Sequence(
    "welcome",
    "consent",
    
        // Concreteness Block
        "instructions1_conc",
        "instructions2_conc",
        "instructions3_hands",
        "practice_intro_conc",
        // One round of training with feedback
        rshuffle("calibrator_conc_feedback"),
        // One round without
        rshuffle("calibrator_conc_no_feedback"),
        
        "endinstructions_conc",
        
        // Round 1
        rshuffle("test_conc"),
        // Round 2
        rshuffle("test_conc"),    
        // Round 3
        rshuffle("test_conc"), 
    
    "mid_task_instructions",
    
        // Valence Block
        "instructions1_val",
        "instructions2_val",
        "instructions3_hands",
        "practice_intro_val",
        
        // One round of training with feedback
        rshuffle("calibrator_val_feedback"),
        // One round without
        rshuffle("calibrator_val_no_feedback"),
        
        "endinstructions_val",
        
        // First Round
        rshuffle("test_val"),
        // Second Round
        rshuffle("test_val"),
        // Third Round
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
   // Define a global Group variable
    newVar("Group")
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
        .print()
    ,
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
    
    newText("<p>This experiment is composed of two parts. In each part, you will be asked to evaluate words presented one by one <strong>as quickly and as accurately as possible</strong>. The words are the same in each part, but how you will be asked to evaluate the words will differ between the two parts.</p>")
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
    
