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
            newTimer("wait",650)
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
            // newKey(" ")
            //     .wait(" ")
            // ,
            // getVar("RT1")
            //     .set( v => Date.now() - v )
            // ,
            // getText ("one").remove (),
            // newText("two", row.Screen4).settings.css("font-size","70").print(),
            // newVar("RT2").global().set( v => Date.now() ),
            // newKey(" ").wait(" "),
            // getVar("RT2").set( v => Date.now() - v )//.log( "ReactionTime2" , getVar("RT2")
            // ,
            // getText ("two")
            //     .remove ()
            // ,
    
            // newVar("RT1")
            //     .global()
            //     .set( v => Date.now() )
            // ,
            newText("<br> <br> <br> <br>")
                .center()
                .print()
            ,
            // newText("Press <b>F</b> for <b>negative</b> and <b>J</b> for <b>positive</b>. ")
            //     .center()
            //     .print()
            // ,
            newCanvas( 'myCanvas', 700, 500)
                .settings.add( 100, 50, 
                        newText("F <br> negative")
                            .settings.css("font-size","30")
                            )
                .settings.add( 500, 50, 
                        newText("J <br> positive")
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
