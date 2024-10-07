PennController.ResetPrefix(null)
// DebugOff()

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

// newTrial("instructions1",
//     // newText("Welcome to the experiment!")
//     //     .center()
//     //     .print()
//     // ,

//     newText("In the following experiment, you will see words presented one after the other.")
//         .center()
//         .print()
//     ,
//     newText("Your job is to categorize each word as <b>ABSTRACT</b> or <b>CONCRETE</b>.")
//         .center()
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print()
//     ,
//     newText("You can answer by pressing the corresponding <b>F</b> or the <b>J</b> key on your keyboard.")
//         .center()
//         .print()
//     ,
//     newText("Please make your evaluation as quickly as possible.")
//         .center()
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print() 
//     ,
//     newButton("continue")
//         .center()
//         .print()
//         .wait()
//     )
    
// newTrial("instructions2",

//     newText("For example, the word <b>KITTEN</b> generally has POSITIVE associations.")
//         .print()
//         .center()
//     ,
//     newText("Therefore you should press the button for <b>POSITIVE</b>.")
//         .center()
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print()
//     ,
//     newText("In contrast, the word <b>DEATH</b> generally has NEGATIVE associations.")
//         .center()
//         .print()
//     ,
//     newText("Therefore you should press the button for <b>NEGATIVE</b>.")
//         .center()
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print() 
//     ,
//     newButton("continue")
//         .center()
//         .print()
//         .wait()
//     )
    
    
// newTrial("instructions3",
//     newText("Please position your fingers as shown in the picture below.")
//         .center()
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print()
//     ,
//     newText("The trials will advance automatically, so you don't need to move your hands during the experiment.")
//         .center()
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print() 
//     ,
//     newText("Press the SPACE BAR when you are ready to start the experiment.")
//         .center()
//         .print()
//     ,
//     newImage("fingers.png")
//         .center()
//         .size( 500,229 )
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print() 
//     ,
//     newKey(" ")
//         .wait()
// )
    
// newTrial("endinstructions",

//     newText("Great! Now you're ready for the practice round.")
//         .center()
//         .print()
//     ,  
//     newText("<br>")
//         .center()
//         .print()
//     ,
//     newText("Remember to respond as quickly as possible.")
//         .center()
//         .print()
//     ,
//     newText("<br>")
//         .center()
//         .print() 
//     ,
//     newText("Press the space bar when you're ready to start the experiment.")
//         .center()
//         .print()
//     ,
//     newKey(" ")
//         .wait()
//     )


Template(
    GetTable("test_output.csv")
        .setGroupColumn( "Group" ),
    // Row will iteratively point to every row in myTable.csv
        row => newTrial( "test",
            newVar("accuracy", 0)
                .global()
            ,
            newImage("cross","cross.png")
                .center()
                .print()
            ,
            newTimer("wait",500)
                .start()
                .wait()
            ,
            getImage("cross")
                .remove()
            ,
            newText("word", row.Word)
                .settings.css("font-size","70")
                .center()
                .print()
            ,
            newVar("RT")
                .global()
                .set( v => Date.now() )
            ,
            newText("<br> <br> <br> <br>")
                .center()
                .print()
            ,
            newCanvas( 'myCanvas', 700, 500)
                .settings.add( 100, 50, 
                        newText("F <br>" + row.F)
                            .settings.css("font-size","30")
                            )
                .settings.add( 500, 50, 
                        newText("J <br>" + row.J)
                            .settings.css("font-size","30")
                        )
                .center()
                .print()
            ,
            newSelector()
                .add( newText("concrete"), newText("abstract"))
                .center()
                .print()
                .keys("F", "J")
                .log()
                .wait()
            ,
            getVar("RT")
                .set( v => Date.now() - v )
            
    )
    .log( "ID" , getVar("ParticipantName"))
    .log( "ReactionTime" , getVar("RT"))
    .log( "Word" , row.Word )
    .log( "Valence" , row.Valence )
)


SendResults()

// Spaces and linebreaks don't matter to the script: we've only been using them for the sake of readability
newTrial( "bye" ,
    newText("Thank you for your participation!")
        .print(),
    newButton()
        .wait()  // Wait for a click on a non-displayed button = wait here forever
)
.setOption( "countsForProgressBar" , false )
;
// Make sure the progress bar is full upon reaching this last (non-)trial