import json
import boto3
import os

dynamodb = boto3.client('dynamodb')


def handle(event, context):

    uid = event['requestContext']['connectionId']
    old_item = dynamodb.get_item(TableName=os.environ['SOCKET_CONNECTIONS_TABLE_NAME'], Key={'connectionId': {'S': uid}})
    old_name = old_item['Item']['name']['S']
    
    new_name = json.loads(event['body'])['name']
    new_item={'connectionId': {'S': uid}, 'name': {'S': new_name}}
    
    dynamodb.put_item(TableName=os.environ['SOCKET_CONNECTIONS_TABLE_NAME'], Item=new_item)
    service_message = f'{old_name} changed their name to {new_name}' if old_name else f'{new_name} has joined the chat'

    response = {
        'action': 'onName',
        'message': {
            'message-type': 'service',
            'message': {
                'name': '',
                'message': service_message
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

    response['onlineUsers'] = [conn['name']['S'] for conn in connectionIds]

    # Emit the recieved message to all the connected devices
    for connectionId in connectionIds:
        if connectionId['name']['S']:
            apigatewaymanagementapi.post_to_connection(
                Data=json.dumps(response),
                ConnectionId=connectionId['connectionId']['S']
        )

    return {}