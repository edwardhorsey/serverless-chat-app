import json
import boto3
import os

dynamodb = boto3.client('dynamodb')


def handle(event, context):
    response = json.loads(event['body'])['name']
    response['type'] = 'chatMessage'
    
    paginator = dynamodb.get_paginator('scan')
    
    connectionIds = []

    apigatewaymanagementapi = boto3.client('apigatewaymanagementapi', 
    endpoint_url = "https://" + event["requestContext"]["domainName"] + "/" + event["requestContext"]["stage"])

    # Retrieve all connectionIds from the database
    for page in paginator.paginate(TableName=os.environ['SOCKET_CONNECTIONS_TABLE_NAME']):
        connectionIds.extend(page['Items'])

    response = request + ' has joined the chat'

    # Emit the recieved message to all the connected devices
    for connectionId in connectionIds:
        apigatewaymanagementapi.post_to_connection(
            Data=response,
            ConnectionId=connectionId['connectionId']['S']
        )

    return {}