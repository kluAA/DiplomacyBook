json.extract! @comment, :id, :body, :author_id, :post_id

json.author do
    json.extract! @comment.author, :id, :first_name, :last_name
    if @comment.author.photo.attached? 
        json.photoUrl url_for(@comment.author.photo)
    else
        json.photoUrl image_url('default_profile.jpg')
    end                       
end