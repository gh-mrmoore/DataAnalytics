x <- 3

x

hello_world <- function(name, exclaim=TRUE) {
  if(exclaim == TRUE) {
    return(paste("HELLO",name,"!"))
  } else {
    return(paste("hello",name))
  }
}

hello_world("Name")

demo_table <- read.csv(file='../_scratch/demo.csv', check.names = F, stringsAsFactors = F)

demo_table

