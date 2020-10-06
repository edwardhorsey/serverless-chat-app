import json
import boto3
import os

dynamodb = boto3.client('dynamodb')

def handle(event, context):
    uid = event['requestContext']['connectionId']
    user_db_item = dynamodb.get_item(TableName=os.environ['SOCKET_CONNECTIONS_TABLE_NAME'], Key={'connectionId': {'S': uid}})

    # Delete connectionId from the database
    dynamodb.delete_item(TableName=os.environ['SOCKET_CONNECTIONS_TABLE_NAME'], Key={'connectionId': {'S': uid}})

    leaving_user = user_db_item['Item']['name']['S']
    service_message = f'{leaving_user} has left the chat'

    response = {
        'action': 'disconnected',
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

    for page in paginator.paginate(TableName=os.environ['SOCKET_CONNECTIONS_TABLE_NAME']):
        connectionIds.extend(page['Items'])

    response['onlineUsers'] = [conn['name']['S'] for conn in connectionIds]

    for connectionId in connectionIds:
        apigatewaymanagementapi.post_to_connection(
            Data=json.dumps(response),
            ConnectionId=connectionId['connectionId']['S']
        )

    return {}