# Good evening again!

So lets start with:
1. Any questions, concerns or thoughts from our last lecture? 
2. So one from me, what did we talk about last time? 
3. And, what actually is Cloud?

Some quick terms to repeat:
1. Region
2. Availability Zone
3. Resource Group
4. Azure Portal

# Let us start where we left off

![](img/azure-resources.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

During this course we will be focusing mostly on these services: 

![](img/azure-data-services.png)  

But first we need to learn how to manage the resources on our Azure platform. 

![](img/management-groups.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

Azure Portal, Azure CLI, Azure Cloud Shell

# Networking

# Identity and Access

# Security

# Homework 

Exercise: Create a Virtual Network and Secure Access to a Virtual Machine in Azure

Step 1: Create a Resource Group

1. Navigate to the Azure Portal and sign in with your credentials.
2. Click on "Resource groups" from the left-hand menu and click the "+ Add" button.
3. Fill in the required information, such as the resource group name, subscription, and region, then click "Create".

Step 2: Create a Virtual Network

1. Click on "Virtual networks" from the left-hand menu and click the "+ Add" button.
2. Fill in the required information, such as the virtual network name, address space, and subnet, then click "Create".
3. Once the virtual network is created, click on it to view its properties.
4. Under "Settings", click on "Subnets" and create a new subnet with the name "subnet-1" and an address range that is a subset of the virtual network address space.

Step 3: Create a Network Security Group

1. Click on "Network security groups" from the left-hand menu and click the "+ Add" button.
2. Fill in the required information, such as the security group name, resource group, and region, then click "Create".
3. Once the security group is created, click on it to view its properties.
4. Under "Settings", click on "Inbound security rules" and create a new rule that allows incoming SSH traffic from a specific IP address range.

Step 4: Create a Virtual Machine

1. Click on "Virtual machines" from the left-hand menu and click the "+ Add" button.
2. Fill in the required information, such as the virtual machine name, resource group, region, and image, then click "Review + create".
3. In the "Networking" tab, select the virtual network and subnet created in Step 2.
4. In the "Management" tab, select the "SSH (22)" option under "Inbound port rules".
5. In the "Advanced" tab, select the network security group created in Step 3 under "Network security group".

Step 5: Connect to the Virtual Machine

1. Once the virtual machine is created, click on it to view its properties.
2. Under "Settings", click on "Networking" and note down the public IP address.
3. Open a terminal or command prompt and connect to the virtual machine using SSH, specifying the public IP address and the username and password created during the virtual machine creation process.


****Congratulations**, you have successfully created a virtual network, secured access to a virtual machine using a network security group, and connected to the virtual machine using SSH. This exercise covers networking, identity access, and security using Azure Portal and Azure CLI.



