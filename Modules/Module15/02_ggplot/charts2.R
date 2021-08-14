# visualize with boxplot
plt <- ggplot(mpg, aes(y=hwy))
plt + geom_boxplot()

# expand an dshow multiple box plots
plt <- ggplot(mpg, aes(x=manufacturer, y=hwy))
plt + geom_boxplot() + theme(axis.text.x = element_text(angle=45, hjust = 1))

# heatmap
mpg_summary <- mpg %>% group_by(class,year) %>% summarize(Mean_Hwy=mean(hwy), .groups = 'keep')
plt <- ggplot(mpg_summary, aes(x=class,y=factor(year),fill=Mean_Hwy))
plt + geom_tile() + labs(x="Vehicle Class",y="Vehicle Year",fill="Mean Highway (MPG)")

# modify heatmap
mpg_summary <- mpg %>% group_by(model,year) %>% summarize(Mean_Hwy=mean(hwy), .groups = 'keep')
plt <- ggplot(mpg_summary, aes(x=model,y=factor(year),fill=Mean_Hwy))
plt + geom_tile() + labs(x="Model",y="Vehicle Year",fill="Mean Highway (MPG)") +
theme(axis.text.x = element_text(angle=90,hjust=1,vjust=.5))

# layers
plt <- ggplot(mpg,aes(x=manufacturer,y=hwy))
plt + geom_boxplot() +
  theme(axis.text.x=element_text(angle=45,hjust=1)) +
  geom_point()

# use mapping argument
mpg_summary <- mpg %>% group_by(class) %>% summarize(Mean_Engine=mean(displ), .groups = 'keep')
plt <- ggplot(mpg_summary,aes(x=class,y=Mean_Engine))
plt + geom_point(size=4) + labs(x="Vehicle Class",y="Mean Engine Size")

# use error bars
mpg_summary <- mpg %>% group_by(class) %>% summarize(Mean_Engine=mean(displ),SD_Engine=sd(displ), .groups = 'keep')
plt <- ggplot(mpg_summary,aes(x=class,y=Mean_Engine))
plt + geom_point(size=4) + labs(x="Vehicle Class", y="Mean Engine Size") +
  geom_errorbar(aes(ymin=Mean_Engine-SD_Engine,ymax=Mean_Engine+SD_Engine))

# faceting
mpg_long <- mpg %>% gather(key="MPG_Type",value="Rating",c(cty,hwy))
plt <- ggplot(mpg_long,aes(x=manufacturer,y=Rating,color=MPG_Type))
plt + geom_boxplot() + theme(axis.text.x=element_text(angle=45,hjust=1))

plt <- ggplot(mpg_long,aes(x=manufacturer,y=Rating,color=MPG_Type))
plt + geom_boxplot() + facet_wrap(vars(MPG_Type)) +
  theme(axis.text.x=element_text(angle=45,hjust=1),legend.position = "none") + xlab("Manufacturer")
