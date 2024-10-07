
newTrial("demo",
    defaultText
        .center()
        .print()
    ,
    newTextInput("NativeLang")
        .log()
        .before( newText("before", "Please enter your native language.") )
        .center()
        .print()
    ,
    newText("<br>")
        .print()
    ,
    newTextInput("OtherLangs")
        .before( newText("before", "Do you speak any other languages?") )
        .center()
        .print()
    ,
    newText("warning", "Please enter your native language.")
        .color("red")
        .bold()
    ,
    newButton("Start")
        .center()
        .print()
        .wait(  // Make sure the TextInput has been filled
            getTextInput("NativeLang")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
    ,
    newVar("NativeLang")
        .global()
        .set( getTextInput("NativeLang") )
    ,
    newVar("OtherLangs")
        .global()
        .set( getTextInput("OtherLangs") )
)
.log( "NativeLang" , getVar("NativeLang") )
.log( "OtherLangs" , getVar("OtherLangs") )
.setOption("hideProgressBar", true); // Do not show the progress bar on first screen
