print('testing')

new_name='ambika'

old_item = {
  'Item': {
    'uid': 1234,
    'name': 'ed'
  }
}

new_item = old_item['Item'].update({'name': new_name})
# new_item['name'] = new_name

print(new_item)
print(old_item)