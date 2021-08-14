demo_table2 <- fromJSON(txt='../_scratch/demo.json')
demo_table2

# select a row, column index
demo_table[3,3]

# select entire vector
demo_table$"Vehicle_Class"

# select single value from vector
demo_table$"Vehicle_Class"[2]

# subset
filter_table <- demo_table2[demo_table2$price > 10000,]

# subset with multiple factors
filter_table2 <- subset(demo_table2, price > 10000 & drive == "4wd" & "clean" %in% title_status)

# sample 2d data structure
num_rows <- 1:nrow(demo_table)
sample_rows <- sample(num_rows, 3)
demo_table[sample_rows]
