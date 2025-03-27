Template(
    GetTable("conc_cal.csv").setGroupColumn("Group"),
    row => newTrial("calibrator_conc_feedback",
        newVar("accuracy", 0).global(),

        // Show a cross to indicate readiness
        newImage("cross", "cross.png").center().print(),
        newTimer("wait", 500).start().wait(),
        getImage("cross").remove(),

        // Display the word
        newText("word", row.Word)
            .settings.css("font-size", "70")
            .center()
            .print(),
        
        // Set up reaction time
        newVar("RT").global().set(v => Date.now()),
        newText("<br> <br> <br> <br>").center().print(),

        // Create canvas for F and J options
        newCanvas('myCanvas', 700, 500)
            .settings.add(100, 50, newText("F <br>" + row.F_value).settings.css("font-size", "30"))
            .settings.add(500, 50, newText("J <br>" + row.J_value).settings.css("font-size", "30"))
            .center().print(),

        // Define feedback text element
        newText("feedback", "")
            .settings.css("font-size", "25")
            .center()
            .css("color", "red")
            .print(),
        
        // Variable to store the selected key
        // newVar("selectedKey").global(),

        // Capture key press and store the selected key
        newSelector("Selection")
            .add(newText(row.F_value), newText(row.J_value))
            .center().print()
            .keys("F", "J")
            .log()  // Log key press
            .wait()
            .setVar("selectedKey"),  // Store the pressed key in selectedKey
        getVar("RT")
                .set( v => Date.now() - v ),
        
        // Set selectedValue based on selectedKey AFTER the key press is captured
        newVar("selectedValue").global().set(
            v => getVar("selectedKey").value === "F" ? row.F_value : row.J_value
        ),

        // Direct feedback logic based on the selected value
        getVar("selectedValue").test.is(row.Concreteness)
            .success(
                getText("feedback").text("This word is best described as <strong>" + row.Concreteness + "</strong>.")
            )
            .failure(
                getText("feedback").text(
                    row.Concreteness === 'neutral'
                        ? "This word is not really one or the other."
                        : "This word is best described as <strong>" + row.Concreteness + "</strong>."
                )
            ),

        newTimer("feedbackWait", 2000).start().wait(),  // Display feedback for 2.5 seconds
        getText("feedback").remove()  // Remove feedback after display
    )
    .log("ID", getVar("ParticipantName"))
    .log("ReactionTime", getVar("RT"))
    .log("Word", row.Word)
    .log("selectedKey", getVar("selectedKey"))
    .log("selectedValue", getVar("selectedValue"))
    .log("Key_value_F", row.F_value)
    .log("Key_value_J", row.J_value)
    .log("Group", row.Group)
);

Template(
    GetTable("conc_cal.csv")
        .setGroupColumn( "Group" ),
    // Row will iteratively point to every row in myTable.csv
        row => newTrial( "calibrator_conc_no_feedback",
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
                .add( newText(row.F_value), newText(row.J_value))
                .center()
                .print()
                .keys("F","J")
                .log()
                .wait()
            ,
            getVar("RT")
                .set( v => Date.now() - v )
            
    )
    .log( "ID" , getVar("ParticipantName"))
    .log( "ReactionTime" , getVar("RT"))
    .log( "Word" , row.Word )
    .log( "Key_value_F", row.F_value)
    .log( "Key_value_J", row.J_value)
    .log("Group", row.Group)
);



Template(
    GetTable("val_cal.csv").setGroupColumn("Group"),
    row => newTrial("calibrator_val_feedback",
        newVar("accuracy", 0).global(),

        // Show a cross to indicate readiness
        newImage("cross", "cross.png").center().print(),
        newTimer("wait", 500).start().wait(),
        getImage("cross").remove(),

        // Display the word
        newText("word", row.Word)
            .settings.css("font-size", "70")
            .center()
            .print(),
        
        // Set up reaction time
        newVar("RT").global().set(v => Date.now()),
        newText("<br> <br> <br> <br>").center().print(),

        // Create canvas for F and J options
        newCanvas('myCanvas', 700, 500)
            .settings.add(100, 50, newText("F <br>" + row.F_value).settings.css("font-size", "30"))
            .settings.add(500, 50, newText("J <br>" + row.J_value).settings.css("font-size", "30"))
            .center().print(),

        // Define feedback text element
        newText("feedback", "")
            .settings.css("font-size", "25")
            .center()
            .css("color", "red")
            .print(),
        
        // Variable to store the selected key
        // newVar("selectedKey").global(),

        // Capture key press and store the selected key
        newSelector("Selection")
            .add(newText(row.F_value), newText(row.J_value))
            .center().print()
            .keys("F", "J")
            .log()  // Log key press
            .wait()
            .setVar("selectedKey"),  // Store the pressed key in selectedKey
        getVar("RT")
            .set( v => Date.now() - v ),
                
        // Set selectedValue based on selectedKey AFTER the key press is captured
        newVar("selectedValue").global().set(
            v => getVar("selectedKey").value === "F" ? row.F_value : row.J_value
        ),


        // Direct feedback logic based on the selected value
        getVar("selectedValue").test.is(row.Valence)
            .success(
                getText("feedback").text("This word is best described as <strong>" + row.Valence + "</strong>.")
            )
            .failure(
                getText("feedback").text(
                    row.Valence === 'neutral'
                        ? "This word is not really one or the other."
                        : "This word is best described as <strong>" + row.Valence + "</strong>."
                )
            ),

        newTimer("feedbackWait", 2000).start().wait(),  // Display feedback for 2.5 seconds
        getText("feedback").remove()  // Remove feedback after display
    )
    .log("ID", getVar("ParticipantName"))
    .log("ReactionTime", getVar("RT"))
    .log("Word", row.Word)
    .log("selectedKey", getVar("selectedKey"))
    .log("selectedValue", getVar("selectedValue"))
    .log("Key_value_F", row.F_value)
    .log("Key_value_J", row.J_value)
    .log("Group", row.Group)
);


Template(
    GetTable("val_cal.csv")
        .setGroupColumn( "Group" ),
    // Row will iteratively point to every row in myTable.csv
        row => newTrial( "calibrator_val_no_feedback",
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
                .add( newText(row.F_value), newText(row.J_value))
                .center()
                .print()
                .keys("F","J")
                .log()
                .wait()
            ,
            getVar("RT")
                .set( v => Date.now() - v )
            
    )
    .log( "ID" , getVar("ParticipantName"))
    .log( "ReactionTime" , getVar("RT"))
    .log( "Word" , row.Word )
    .log( "Key_value_F", row.F_value)
    .log( "Key_value_J", row.J_value)
    .log("Group", row.Group)
);

