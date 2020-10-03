import json
import boto3
import os

dynamodb = boto3.client('dynamodb')


def handle(event, context):
    new_name = json.loads(event['body'])['name']
    response = {
        'action': 'onName',
        'message': {
            'message-type': 'service',
            'message': {
                'name': '',
                'message': f'{new_name} has joined the chat'
            }
        }
    }
    paginator = dynamodb.get_paginator('scan')
    
    connectionIds = []

    apigatewaymanagementapi = boto3.client('apigatewaymanagementapi', 
    endpoint_url = "https://" + event["requestContext"]["domainName"] + "/" + event["requestContext"]["stage"])

    # Retrieve all connectionIds from the database
    for page in paginator.paginate(TableName=os.environ['SOCKET_CONNECTIONS_TABLE_NAME']):
        connectionIds.extend(page['Items'])

    # Emit the recieved message to all the connected devices
    for connectionId in connectionIds:
        apigatewaymanagementapi.post_to_connection(
            Data=json.dumps(response),
            ConnectionId=connectionId['connectionId']['S']
        )

    return {}