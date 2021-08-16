# Deliverable 1

# Use the library() function to load the dplyr package.
library(dplyr)

# Import and read in the MechaCar_mpg.csv file as a dataframe.
mecha_car_mpg <- read.csv('MechaCar_mpg.csv', check.names = F, stringsAsFactors = F)

# Perform linear regression using the lm() function.
# In the lm() function, pass in all six variables (i.e., columns), 
# and add the dataframe you created in Step 4 as the data parameter.

lm(mpg ~ vehicle_length + vehicle_weight + spoiler_angle + ground_clearance + AWD, data=mecha_car_mpg)

#Using the summary() function, determine the p-value and the r-squared value
# for the linear regression model.
summary(lm(mpg ~ vehicle_length + vehicle_weight + spoiler_angle + ground_clearance + AWD, data=mecha_car_mpg))

# Deliverable 2

# import and read in the Suspension_Coil.csv file as a table.
susp_coil_data <- read.csv('Suspension_Coil.csv', check.names = F, stringsAsFactors = F)

# Write an RScript that creates a total_summary dataframe using the summarize() function
# to get the mean, median, variance, and standard deviation of the suspension coil's PSI column.
total_summary <- susp_coil_data %>% summarize(Mean=mean(PSI),Median=median(PSI),Variance=var(PSI), SD=sd(PSI))

lot_summary <- susp_coil_data %>% group_by(Manufacturing_Lot) %>% summarize(Mean_PSI=mean(PSI), Median_PSI=median(PSI), PSI_Variance=var(PSI), PSI_SD=sd(PSI), .groups = 'keep')

# Deliverable 3

# write an RScript using the t.test() function to determine if the PSI across all
# manufacturing lots is statistically different from the population mean of 1,500 pounds per square inch.
t.test(susp_coil_data$PSI,mu=1500)


t.test(susp_coil_data$PSI, subset(susp_coil_data, Manufacturing_Lot == 'Lot1')[['PSI']])

t.test(susp_coil_data$PSI, subset(susp_coil_data, Manufacturing_Lot == 'Lot2')[['PSI']])

t.test(susp_coil_data$PSI, subset(susp_coil_data, Manufacturing_Lot == 'Lot3')[['PSI']])
