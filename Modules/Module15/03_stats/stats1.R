# qualitative test for normality

ggplot(mtcars,aes(x=wt)) + geom_density()

# quantitative test for normality
shapiro.test(mtcars$wt)

# From text: if the p-value is greater than 0.05, the data is considered normally distributed

# sampling
population_table <- read.csv('../_scratch/used_car_data.csv', check.names = F, stringsAsFactors = F)
plt <- ggplot(population_table, aes(x=log10(Miles_Driven)))
plt + geom_density()

# create a sample dataset
sample_table <- population_table %>% sample_n(50)
plt <- ggplot(sample_table, aes(x=log10(Miles_Driven)))
plt + geom_density()

# compare sample to population using t-test
t.test(log10(sample_table$Miles_Driven),mu=mean(log10(population_table$Miles_Driven)))

# two-sample t-test
sample_table <- population_table %>% sample_n(50)
sample_table2 <- population_table %>% sample_n(50)

t.test(log10(sample_table$Miles_Driven),log10(sample_table2$Miles_Driven))

# paired t-test
mpg_data <- read.csv('../_scratch/mpg_modified.csv')
mpg_1999 <- mpg_data %>% filter(year==1999)
mpg_2008 <- mpg_data %>% filter(year==2008)

t.test(mpg_1999$hwy, mpg_2008$hwy,paired = T)

# ANOVA
mtcars_filt <- mtcars[,c("hp","cyl")]
mtcars_filt$cyl <- factor(mtcars_filt$cyl)

aov(hp ~ cyl,data=mtcars_filt)
summary(aov(hp ~ cyl,data=mtcars_filt))

# Correlation
plt <- ggplot(mtcars,aes(x=hp,y=qsec))
plt + geom_point()

# calculate correlation coefficient
cor(mtcars$hp,mtcars$qsec)

# correlation in used cars data
used_cars <- read.csv('../_scratch/used_car_data.csv', stringsAsFactors = F)
head(used_cars)

#look at the data for miles driven vs selling price
plt <- ggplot(used_cars,aes(x=Miles_Driven,y=Selling_Price))
plt + geom_point()

# check the correlation
cor(used_cars$Miles_Driven,used_cars$Selling_Price)

# correlation matrix
used_matrix <- as.matrix(used_cars[,c("Selling_Price","Present_Price","Miles_Driven")])
cor(used_matrix)

# linear regression
lm(qsec ~ hp,mtcars)
summary(lm(qsec~hp,mtcars))

# visualize the fitted line
model <- lm(qsec ~ hp,mtcars)
yvals <- model$coefficients['hp']*mtcars$hp +
  model$coefficients['(Intercept']
plt <- ggplot(mtcars,aes(x=hp,y=qsec))
plt + geom_point() + geom_line(aes(y=yvals), color = "red")

# multiple linear regression
lm(qsec ~ mpg + disp + drat + wt + hp,data=mtcars)
summary(lm(qsec ~ mpg + disp + drat + wt + hp,data=mtcars))

# category complexities

# generate table
table(mpg$class,mpg$year)
tbl <- table(mpg$class,mpg$year)
chisq.test(tbl)

# A/B Testing
