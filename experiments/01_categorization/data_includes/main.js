PennController.ResetPrefix(null)

Sequence(
    // "intro","Consent","Participantid","Questionsparticipant","game1","counter","instructions","instructions2",
    // "endintructions",
    // "warmup1","mid warmup","vartest","warmup2","end of warmup",
    // "reminder",
    randomize("test"),
    // "debrief",
    SendResults(),"prolific","bye")
