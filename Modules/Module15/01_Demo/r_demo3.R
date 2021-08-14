# modify out demo table
demo_table3 <- demo_table %>% mutate(Mileage_per_Year=Total_Miles/(2020-Year),IsActive=TRUE)

# output table
demo_table3

# group data
summarize_demo <- demo_table2 %>% group_by(condition) %>% summarize(Mean_Mileage=mean(odometer), .groups = 'keep')

# display summarized data
summarize_demo

# import new data to practice re-shaping data
demo_table4 <- read.csv('../_scratch/demo2.csv',check.names = F, stringsAsFactors = F)

long_table <- gather(demo_table4, key="Metric", value="Score", buying_price:popularity)

# or

long_table <- demo_table4 %>% gather(key="Metric", value="Score", buying_price:popularity)

# spread data
wide_table <- long_table %>% spread(key="Metric", value="Score")
