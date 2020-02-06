@friends.each do |friend|
    json.set! friend.id do
        json.extract! friend, :id, :first_name, :last_name, :gender
        if friend.photo.attached? 
            json.photoUrl url_for(friend.photo)
        else
            json.photoUrl image_url('default_profile.jpg')
        end
    end

end