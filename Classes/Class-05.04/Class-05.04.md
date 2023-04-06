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

# Exams

Get an account here following the instructions on the website: https://learn.microsoft.com/en-us/certifications/student-training-and-certification  
Verify yourself that you are a student: https://verify.microsoft.com/

# Let us start where we left off

![](img/azure-resources.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

During this course we will be focusing mostly on these services: 

![](img/azure-data-services.png)  

But first we need to learn how to manage the resources on our Azure platform. 

![](img/management-groups.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

So what do we have? 
1. Azure Portal - We already learned saw it in action.

2. Azure CLI - command-line tool that provides a way to manage resources on Azure using simple, intuitive commands. It's a good option if you prefer working in a terminal or need to automate resource management tasks. Good integration with other command line tools.  

Azure CLI:  

az group create --name SecondClass_RG --location eastus && \
az storage account create \
    --name secondclassstorage \
    --resource-group SecondClass_RG \
    --location eastus \
    --sku Standard_LRS \
    --kind BlobStorage \
    --access-tier Hot  

Easy to copy:
az group create --name SecondClass_RG --location eastus &&  az storage account create   --name secondclassstorage  --resource-group SecondClass_RG   --location eastus  --sku Standard_LRS  --kind BlobStorage  --access-tier Hot  

3. Azure PowerShell - PowerShell module that provides a set of cmdlets for managing Azure resources. It's a good option if you're comfortable with PowerShell and prefer to work in a scripting environment

4. Azure Resource Manager templates - ARMs are declarative JSON files that describe the infrastructure and configuration of Azure resources. Basic of many IaC for projects infrastructure. 

Repo of templates shared by the community: https://github.com/Azure/azure-quickstart-templates  

An example of how it is being used and how you can use it: https://github.com/samelhousseini/km-openai  

5. Terraform - popular open-source IaC tool that allows you to define, provision, and manage infrastructure resources across multiple cloud providers. 

How to start with it: https://learn.microsoft.com/en-us/azure/developer/terraform/get-started-azapi-resource  

The most important difference for me: Terraform automatically handles resource dependencies, while ARM requires you to define dependencies explicitly.

# Identity and Access

![](img/azure-ad.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

You authenticate:
1. Password
2. Multifactor
3. Single Sign-on

External authenticate: 

![](img/azure-external-ad.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

How do you get access to things? 

![](img/azure-rbac.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

Scopes include:

1. A management group (a collection of multiple subscriptions).
2. A single subscription.
3. A resource group.
4. A single resource

Azure RBAC is hierarchical, in that when you grant access at a parent scope, those permissions are inherited by all child scopes.

# Security

![](img/zero-trust.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/

And how does Azure care about the security when it comes to access? 

![](img/defense-in-depth.png)  
Source: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/  

Different roles for Infra and Data roles!

Best practice for our application security:
1. Always use Azure Monitor, Application Insights to check the state of your solutions
2. Transfer logs to Azure Log Analytics for easier log exploration 
3. Secure your applications with virtual networks and NSGs
4. Manage access with IaM 
5. Secure your keys with Azure KeyVault

We will be touching on security for different service when we will get to them! 

# Networking

So what do we get out of the networking: https://azure.microsoft.com/en-us/products/category/networking/  

Virtual network generally:
![](img/vnet.png)  
Source: https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview  

OSI Model
![](img/OSImodel.jpg) 
Source: http://cisconetworkingbasics.blogspot.com/2013/06/the-osi-network-model-what-you-need-to.html  

Networking explanation in a video for those interested: https://www.youtube.com/watch?v=OqsXzkXfwRw
And also more about CIDR: https://www.youtube.com/watch?v=Q1U9wVXRuHA  

Understanding IP addresses: https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking  

This online subnet calculator is the perfect tool to help you figure out out what a network address will be or calculate subnets with masks, when you're building your network infrastructure:

IP Subnet Calculator: https://www.calculator.net/ip-subnet-calculator.html  

There are many ways to build your network infrastructure in Azure. Here all the options: https://learn.microsoft.com/en-us/azure/architecture/guide/networking/networking-start-here  

The most popular architecture is a hub and spoke infrastructure. Check it out here: https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?tabs=cli  

# Pricing 

![](img/azure-costopt.png)  

But how do i price my projects with all that? 
Well, pricing calculator for the rescue: https://azure.microsoft.com/en-us/pricing/calculator/  

# Exercise

Exercise: Create a Virtual Network and Secure Access to a Virtual Machine in Azure:

Step 1: Create a Resource Group

1. Navigate to the Azure Portal and sign in with your credentials.
2. Click on "Resource groups" from the left-hand menu and click the "+ Add" button.
3. Fill in the required information, such as the resource group name, subscription, and region, then click "Create".

Step 2: Create a Network Security Group

1. Click on "Network security groups" from the left-hand menu and click the "+ Add" button.
2. Fill in the required information, such as the security group name, resource group (the one which is already created), and region, then click "Create".
3. Once the security group is created, click on it to view its properties.

Step 3: Create a Virtual Network

1. Click on "Virtual networks" from the left-hand menu and click the "+ Add" button.
2. Fill in the required information, such as the virtual network name, address space (for example 10.0.0.0/16) and a default subnet (for example 10.0.0.0/24), then click "Create". The network needs to be in the same region as the NSG.
3. Once the virtual network is created, click on it to view its properties.
4. Under "Settings", click on "Subnets" and create a new subnet with the name "subnet-1" and an address range (for example 10.0.1.0/24) that is a subset of the virtual network address space. When creating add NSG to the subnet created in the step 2.

Step 4: Create a Virtual Machine

1. Click on "Virtual machines" from the left-hand menu and click the "+ Add" button.
2. Fill in the required information, such as the virtual machine name, resource group, region - both need to be the same as the two other services, and image, then click "Networking". Don't create the virtual machine yet!
3. In the "Networking" tab, select the virtual network and subnet created in Step 2.
4. Change Public IP to None - we don't want public access to our VM. 
5. Create the Virtual Machine. You can download keys to the access. This would be needed if you would want to connect through SSH. Here we will test RDP connection. 

Step 5: Test connection to the Virtual Machine
1. After creation, go to "Connect" and click "RDP". 
2. Click "Test your connection" and allow the address to be "My IP Address". 
3. Change destination to RDP (Remote Desktop Connection). 
4. Run test. See that the test failed cause all inbound (this means incoming) connections to the VM were disabled during creation. 
5. Now under "Networking", click on "Add Inbound Port Rule" and create a new rule that allows incoming RDP traffic from your IP address. How you can check your private computer IP address: https://whatismyipaddress.com/. This rule should allow acces to the IP under which your VM is accesable. This info is on the same page seen as NIC Private IP. 
6. Go back to "Connect" and test the connection again in the same way. Success! Now through RDP you can access and work with your VM on your computer!

Step 6: Assign a Role to a User or Group

1. Click on "Access control (IAM)" from the left-hand menu and click on the "+ Add" button in your VM.
2. Select "Add role assignment" and fill in the required information, such as the role, user or group, scope is already the resource you are on, your VM.
3. Click "Save" to assign the role to the selected user or group. Ask someone you added to see if they can see the resource. 

Important note: they still will not be able to access the inside of the VM. This is still only allowed from your IP! 


**Congratulations**, you have successfully created a virtual network, secured access to a virtual machine using a network security group, and connected to the virtual machine using SSH. This exercise covers networking, identity access, and security using Azure Portal and Azure CLI.

And now get me an ARM Template for that!
It is actually here for you in this folder.

# Homework

Do it all with Azure CLI or Terraform. 
I would strongly recommend to check out Terraform if you are thinking about working with infrastructure for real in the future.



