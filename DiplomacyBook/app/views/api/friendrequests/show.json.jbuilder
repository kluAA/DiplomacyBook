json.extract! @friendrequest, :id, :sender_id, :receiver_id
json.sender do
    json.extract! @friendrequest.sender, :first_name, :last_name
 end