@post_photos.each do |photo| 
    json.set! photo.id do
        json.extract! photo, :id
        json.photoUrl url_for(photo.photo)
    end
end