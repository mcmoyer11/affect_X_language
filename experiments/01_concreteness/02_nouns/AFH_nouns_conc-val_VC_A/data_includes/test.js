

Template(
    GetTable("chatgpt_nouns_conc_a.csv").setGroupColumn( "Group" ),
        row => newTrial( "test_conc",
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
                        newText("F <br>" + row.F_value)
                            .settings.css("font-size","30")
                            )
                .settings.add( 500, 50, 
                        newText("J <br>" + row.J_value)
                            .settings.css("font-size","30")
                        )
                .center()
                .print()
            ,
            newSelector()
                .add( newText(row.F_value), newText(row.J_value) )
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
    .log( "ConcValCombo" , row.ConcValCombo )
    .log( "Key_value_F", row.F_value)
    .log( "Key_value_J", row.J_value)
    .log( "Group", row.Group)
);

Template(
        GetTable("chatgpt_nouns_val_a.csv").setGroupColumn( "Group" ),
        row => newTrial( "test_val",
            newVar("accuracy", 0)
                .global(),
            newImage("cross","cross.png")
                .center()
                .print(),
            newTimer("wait",500)
                .start()
                .wait(),
            getImage("cross")
                .remove(),
            newText("word", row.Word)
                .settings.css("font-size","70")
                .center()
                .print(),
            newVar("RT")
                .global()
                .set( v => Date.now() ),
            newText("<br> <br> <br> <br>")
                .center()
                .print(),
            newCanvas( 'myCanvas', 700, 500)
                .settings.add( 100, 50, 
                        newText("F <br>" + row.F_value)
                            .settings.css("font-size","30")
                            )
                .settings.add( 500, 50, 
                        newText("J <br>" + row.J_value)
                            .settings.css("font-size","30")
                        )
                .center()
                .print(),
            
            newSelector()
                .add( newText(row.F_value), newText(row.J_value))
                .center()
                .print()
                .keys("F", "J")
                .log()
                .wait(),
            getVar("RT")
                .set( v => Date.now() - v )
            
    )
    .log( "ID" , getVar("ParticipantName"))
    .log( "ReactionTime" , getVar("RT"))
    .log( "Word" , row.Word )
    .log( "ConcValCombo" , row.ConcValCombo )
    .log( "Key_value_F", row.F_value)
    .log( "Key_value_J", row.J_value)
    .log("Group", row.Group)
);

