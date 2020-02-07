json.posts do 
    @posts.each do |post|
        json.set! post.id do
            # author = post.author
            # json.extract! post, :id, :body, :user_id, :author_id
            # json.author do
            #     json.first_name author.first_name
            #     json.last_name author.last_name
            #     if author.photo.attached? 
            #         json.photoUrl url_for(author.photo)
            #     else
            #         json.photoUrl image_url('default_profile.jpg')
            #     end            
            # end
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