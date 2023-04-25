# Blog Application - Cloud Computing Graduate Project

## AWS Architecture

![Architecture](https://user-images.githubusercontent.com/67619547/234293189-096fff75-7019-4457-8e37-5779d6fea9c0.png)

Architecture consists of the use of following services:

1. **AWS VPC:** Virtual Private Cloud (VPC) has two subnets, one is public (192.168.0.0/25) and one is private (192.168.0.128/25). It provides network isolation for our resources. Front-end of the application goes inside public subnet and back-end resources will be secured inside private subnet. Only the requests from public subnet will be allowed to enter inside the private subnet. This will makes sure that no other person is interacting with our mongodb database. VPC will further demands for many other services or components of AWS like NAT Gateway, Internet Gateway, creating and configuring route tables and a security groups.

2. **AWS NAT Gateway:** NAT gateway will allow the instances in the private subnet to connect to the internet in order to download packages or access third-party API's used in the backend application.

3. **AWS Internet Gateway:** An Internet Gateway allows the instances in the public subnet to be accessible from the internet or allow instances in public subnet to connect to the outside network.

4. **AWS EC2:** Two EC2 instances are used in this architecture. One to host React app and another one to deploy Node applicaiton.

5. **AWS S3:** This service is self explanatory. It stores all of the blog images. It provides high scalability, availability, and durability.

6. **AWS API Gateway:** API Gateway can be used to create and manage RESTful APIs for our services, which includes authentication, throttling, and monitoring. In my case, I have one endpoint to send email notification whenever a new blog is created. I have choosed a serverless architecture to send email by using SQS queue and Lambda function.

7. **AWS SQS:** Amazon SQS decouples the components of our system and to provide a reliable message queuing service for asynchronous communication between our components. It is important piece of component to scale the application, especially, when our appliation has a lot of users creating many blogs at the same time.

8. **AWS Lambda:** It allows us to run our code without provisioning or managing servers, and to scale automatically in response to demand. Lambda function is triggerd by an SQS queue in my architecture.

9. **AWS ECR:** Amazon Elastic Container Registry allows me to put the docker image of my email sending logic. It is used by Lambda function to get the code and install the required dependencies. This is very flexible because I can create different version of my images and I am confident that what I wrote in the development environment is what actually runs in the production.

10. **AWS Secrets Manager:** Secrets Manager stores all the secrets of backend application like mongodb username and passwords, JWT secret key, etc. The values of the secrets are later accessed in the application via AWS SDK.

11. **AWS CloudFormation:** AWS CloudFormation is really powerful as it provisions entire architecture as shown in above figure automatically. You can refer `blogiver-template.yaml` file to see CloudFormation script.
