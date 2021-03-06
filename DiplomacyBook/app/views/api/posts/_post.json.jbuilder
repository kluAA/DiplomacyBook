
    author = post.author
    json.extract! post, :id, :body, :user_id, :author_id, :created_at
    if post.photo.attached?
        json.photoUrl url_for(post.photo)
    end

    json.comment_ids post.comment_ids
    json.author do
        json.first_name author.first_name
        json.last_name author.last_name
        if author.photo.attached? 
            json.photoUrl url_for(author.photo)
        else
            json.photoUrl image_url('default_profile.jpg')
        end            
    end
    json.liked_users post.liked_user_ids

