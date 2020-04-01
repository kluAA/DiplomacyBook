json.set! @likepost.id do 
    json.extract! @likepost, :id, :post_id, :user_id
end