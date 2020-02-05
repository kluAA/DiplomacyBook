json.extract! @friendrequest, :id, :sender_id, :receiver_id
json.sender do
    sender = @friendrequest.sender
    json.extract! sender, :first_name, :last_name
    if sender.photo.attached? 
        json.photoUrl url_for(sender.photo)
    else
        json.photoUrl image_url('default_profile.jpg')
    end
 end