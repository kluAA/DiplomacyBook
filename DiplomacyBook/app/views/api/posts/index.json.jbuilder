json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
        end
    end
end

@posts.each do |post|
    json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do  
                json.extract! comment, :id, :body, :post_id, :author_id
                json.author do
                    json.extract! comment.author, :id, :first_name, :last_name
                    if comment.author.photo.attached? 
                        json.photoUrl url_for(comment.author.photo)
                    else
                        json.photoUrl image_url('default_profile.jpg')
                    end                       
                end
            
            end
        end
    end
end