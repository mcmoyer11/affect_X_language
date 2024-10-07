// newTrial("instructions1",

//     newText("In the following experiment, you will see words presented one after the other.")
//         .center()
//         .print()
//     ,
//     newText("Your job is to categorize each word as <b>POSITIVE</b> or <b>NEGATIVE</b>.")
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
//     // newButton("Continue")
//     //     .center()
//     //     .print()
//     //     .wait()
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
                .add( newText("negative"), newText("positive"))
                .center()
                .print()
                .keys("F", "J")
                .log()
                .wait()
            ,
            // newKey("select","FJ")
            //     .log()
            //     .wait(" ")
            //     .log()
            // ,
            // getKey("select")
            //     .test.pressed(row.Screen7)
            //     .success(getVar("accuracy").set( v=1 ))
            //     .failure(getVar("accuracy").set(v=0))
            // ,
            getVar("RT")
                .set( v => Date.now() - v )
            // ,
            // getText ("three")
            //     .remove ()
            
    )
    .log( "ID" , getVar("ParticipantName"))
    .log( "ReactionTime" , getVar("RT"))
    .log( "Word" , row.Word )
    .log( "Valence" , row.Valence )
    // .log("Answeraccuracy", getVar("accuracy"))
    // .log("Group", row.Group)
)
