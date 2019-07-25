#!/bin/bash

aws cloudformation $ACTION \
    --region us-east-2 \
    --stack-name $STACK_NAME \
    --template-body file://service.yaml \
    --capabilities CAPABILITY_NAMED_IAM \
    --parameters \
    ParameterKey=DockerImage,ParameterValue=077504892501.dkr.ecr.us-east-2.amazonaws.com/api:$(git rev-parse HEAD) \
    ParameterKey=VPC,ParameterValue=vpc-b5c222de \
    ParameterKey=Cluster,ParameterValue=app-cluster \
    ParameterKey=Listener,ParameterValue=arn:aws:elasticloadbalancing:us-east-2:077504892501:listener/app/production/8b0f76ab640ce622/2f1e556dc206afe1