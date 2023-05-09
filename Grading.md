# Grading and project

During the subject you can gather 100 points. 

Grading is based on two factors: 
1. Engagement and participation in classes - 20 points
2. Project - 80 points

100 points make 100%, grades are as follows:

```
<51; 60) % 3
<61; 70) % 3.5
<71; 80) % 4
<81; 90) % 4.5
>= 91% 5
```

## Project 

The project is done in pairs. Please choose someone with a similar Cloud experience. This is gonna help both of you take the most from this project. For the project you need to perform the following task:

1. Using Azure tools, build a pipeline, which:
- Obtains a dataset (your choice, but cross-sectional data please) from the Polish Statistical Office API (https://api.stat.gov.pl/Home/BdlApi?lang=en),
- Saves it in cloud storage,
- Performs data transformations (for example discarding some columns, one-hot encoding categorical variables etc.),
- Puts the transformed data into a database of your choice (can be Storage solution as well),
- Executes Python code applying k-means clustering (or other clustering algorithm of your choice) to the data from the database and saves the clustering results.
2. Visualize the obtained clusters in Power BI in the cloud.
3. Write an Azure Function returning basic statistics (like mean, median, count, variance, but specified in the request by the user) for each of the clusters, that can be called through an HTTP request by anyone having appropriate credentials.

Throughout our classes we will be learning about the Azure features which will help you deliver the project. I am recommending to start working on the project afrer our third class if you are new to the Azure Cloud. 

In the project your main objective is to learn. The main result I care about is that you leave this class being able to work with Azure Data suite.

**Important Note**
If you would like to use other technologies that the one I outlined in the task (because for example you know the ones which are mentioned here, or you have a briliant optimization idea), it is allowed. You just need to bring it up to me before the class on 17.05 and then explain your choices in the presentation.

## Results

The results I am expecting at the end of your projects is:
- Full architecture of your solution diagram (Why you chosen given technologies? What influenced your choices?)
- What framework and methods did you use? Why? (Using Azure Portal? Terraform? Azure Resource Manager?)
- Did you automate your process? How? How this could be automated in the future? 
- What issues you had? What problems you found while dealing with Azure?
- Demo of your solution, imagine your showing a solution of a project to a customer (Yes, I am the customer!)

This all needs to be included in the frinal presentation on 24.05
Remember that the presentations are made by each team **for your collegues**. Show what you have learned so that we all can leave this class knowing a bit more ☺️







