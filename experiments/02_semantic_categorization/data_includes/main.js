PennController.ResetPrefix(null)
// DebugOff()

Sequence(
    // "intro","Consent","Participantid","Questionsparticipant","game1","counter","instructions","instructions2",
    // "endintructions",
    // "warmup1","mid warmup","vartest","warmup2","end of warmup",
    // "reminder",
    "instructions1",
    "instructions2","endinstructions",
    randomize("test"),
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


newTrial("instructions1",
    newText("In the following experiment, you will see words presented one after the other.")
        .center()
        .print()
    ,
    newText("Your job is to categorize each word as <b>abstract</b> or <b>concrete</b>.")
        .center()
        .print()
    ,   
    newText("<br> ")
        .center()
        .print()
    ,
    newText("Make your evaluation as quickly as possible."
        .center()
        .print()
    ,
    newText("<br> ")
        .center()
        .print()
    ,
    newText("You can answer by pressing the <b>F</b> or the <b>J</b> key on your keyboard.")
        .center()
        .print()
    ,
    newButton("next","Continue")
        .center()
        .print()
        .wait()
    )
)

newTrial("instructions2",
    newText("For example, the word <b>CAT</b> refers to an animal in the world that you can touch and see.")
        .print()
        .center()
    ,
    newText("<br> ")
        .center()
        .print()
    ,
    newText("Therefore you should press the button for <b>CONCRETE</b>.")
        .center()
        .print()
    ,
    newText("<br> ")
        .center()
        .print()
    ,
    newText("In contrast, the word <b>FREEDOM</b> refers to an idea, something you cannot touch and see.")
        .center()
        .print()
    ,
    newText("<br> ")
        .center()
        .print()
    ,
    newText("Therefore you should press the button for <b>ABSTRACT</b>.")
        .center()
        .print()
    ,
    newButton("next","Continue")
        .center()
        .print()
        .wait()
)

newTrial("instructions3",
    newText("Please position your fingers adequately and press <strong>SPACE BAR</strong> when you are ready to start the experiment.")
        .center()
        .print()
    ,
    newImage("fingers.png")
        .center()
        .size( 500,229 )
        .print()
    ,
    newButton("next","Continue")
        .center()
        .print()
        .wait()
)

newTrial("endintructions",
    newText("You will now start a practice round. The first four trials will be presented with full intructions that will then be removed for the rest of the practice. At the end, a message will inform you that you are about to start the test phase.")
        .center()
        .print()
    ,

    newKey(" ")
        .wait()
)



Template(
    GetTable("test_sample.csv")
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
                        newText("F <br> concrete")
                            .settings.css("font-size","30")
                            )
                .settings.add( 500, 50, 
                        newText("J <br> abstract")
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