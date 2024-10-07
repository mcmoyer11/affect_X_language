newTrial("instructions1",

    newText("In the following experiment, you will see words presented one after the other.")
        .center()
        .print()
    ,
    newText("Your job is to categorize each word as <b>POSITIVE</b> or <b>NEGATIVE</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("You can answer by pressing the corresponding <b>F</b> or the <b>J</b> key on your keyboard.")
        .center()
        .print()
    ,
    newText("Please make your evaluation as quickly as possible.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    )
    
newTrial("instructions2",

    newText("For example, the word <b>KITTEN</b> generally has POSITIVE associations.")
        .print()
        .center()
    ,

    newText("Therefore you should press the button corresponding to <b>POSITIVE</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("In contrast, the word <b>DEATH</b> generally has NEGATIVE associations.")
        .center()
        .print()
    ,
    newText("Therefore you should press the button corresponding to <b>NEGATIVE</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Some words may not be straightforwardly one or the other.")
        .center()
        .print()
    ,
    newText("In these cases do not panic, but go with your first response.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    )
    
    
newTrial("instructions3",
    newText("Please position your fingers as shown in the picture below.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("The trials will advance <b>automatically</b>, so you don't need to move your hands during the experiment.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the SPACE BAR when you are ready to start the experiment.")
        .center()
        .print()
    ,
    newImage("fingers.png")
        .center()
        .size( 500,229 )
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newKey(" ")
        .wait()
    // newButton("Continue")
    //     .center()
    //     .print()
    //     .wait()
)
    
newTrial("endinstructions",

    newText("Great! Now you're ready for the experiment.")
        .center()
        .print()
    ,  
    newText("<br>")
        .center()
        .print()
    ,
    newText("Remember to respond as quickly as possible.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Make sure you're in a quiet room with no distractions.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Once you start the experiment, do not stop until the end.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the space bar when you're ready to start.")
        .center()
        .print()
    ,
    newKey(" ")
        .wait()
    )