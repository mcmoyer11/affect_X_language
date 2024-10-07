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
                .settings.add( 50, 50, 
                        newText("F <br> positive")
                            .settings.css("font-size","30")
                            // .center()
                            )
                .settings.add( 320 , 50, 
                        newText("SPACE <br> neutral")
                            .settings.css("font-size","30")
                            // .center()
                        )
                .settings.add( 600, 50, 
                        newText("J <br> negative")
                            .settings.css("font-size","30")
                            // .center()
                        )
                .center()
                .print()
            ,
            newSelector()
                .add( newText("negative"), newText("positive"), newText("neutral"))
                .center()
                .print()
                .keys("F", " ", "J")
                .log()
                .wait()
            ,
            
            // Trivalent key press selection screen
            // PennController("selection",
            //     newText("instruction", "Press 'F' for Option 1, 'J' for Option 2, and the space bar for Option 3.")
            //         .print()
            //     ,
            //     newSelector("keySelector")
            //         .add(
            //             newKey("F", "F"),
            //             newKey("J", "J"),
            //             newKey("Space", " ")
            //         )
            //         .wait()
            //         .log("all")
            //     ,
            //     // Store the selection result in a global variable
            //     getSelector("keySelector")
            //         .test.selected()
            //         .success(
            //             getSelector("keySelector")
            //                 .selected()
            //                 .test.text("F")
            //                 .success(
            //                     newVar("selection").set("Option 1")
            //                 )
            //                 .test.text("J")
            //                 .success(
            //                     newVar("selection").set("Option 2")
            //                 )
            //                 .test.text(" ")
            //                 .success(
            //                     newVar("selection").set("Option 3")
            //                 )
            //         )
            // ),
            
            
            
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

