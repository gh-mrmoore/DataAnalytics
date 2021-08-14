# compare number of vehicles from each manufacturer
mpg_summary <- mpg %>% group_by(manufacturer) %>% summarize(Vehicle_Count=n(), .groups = 'keep')
plt <- ggplot(mpg_summary, aes(x=manufacturer, y=Vehicle_Count))
# plt + geom_col()
# add some formatting
plt + geom_col() + xlab("Manufacturing Company") + ylab("Number of Vehicles in Dataset") +
  theme(axis.text.x=element_text(angle=45, hjust=1))

# subset for line chart

mpg_summary <- subset(mpg, manufacturer == 'toyota') %>% group_by(cyl) %>% summarize(Mean_Hwy=mean(hwy), .groups = 'keep')
plt <- ggplot(mpg_summary, aes(x=cyl, y=Mean_Hwy))
# plt + geom_line()

# adjust the plot to be more representative of the data
plt + geom_line() + scale_x_discrete((limits=c(4,6,8)) + scale_y_continuous(breaks = c(15:30))
                                     
# create a scatter plot

plt <- ggplot(mpg, aes(x=displ, y=cty))
plt + geom_point() + xlab("Engine Size (L)") + ylab("City Fuel Efficiency (MPG)")

# modify to visualize relationships with color

plt <- ggplot(mpg, aes(x=displ, y=cty, color=class))
plt + geom_point() + labs(x="Engine Size", y="City Fuel Efficiency", color="Vehicle Class")

# use shape to further distinguish points

plt <- ggplot(mpg, aes(x=displ, y=cty, color=class, shape=drv))
plt + geom_point() + labs(x="Engine Size", y="Fuel Efficiency", color="Vehicle Class", shape="Type of Drive")
