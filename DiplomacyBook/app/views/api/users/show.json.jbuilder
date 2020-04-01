json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :gender


if @user.photo.attached? 
    json.photoUrl url_for(@user.photo)
else
    json.photoUrl image_url('default_profile.jpg')
end

if @user.cover.attached? 
    json.coverUrl url_for(@user.cover)
end

# json.friends do
#     @user.friend_ids.each do |friend_id|
#         json.set! friend_id, true
#     end
# end

# json.requesters do
#     @user.requester_ids.each do |requester_id|
#         json.set! requester_id, true
#     end
# end

# json.requesteds do  
#     @user.requested_ids.each do |requested_id|
#         json.set! requested_id, true
#     end
# end

json.friends @user.friend_ids
json.requesters @user.requester_ids
json.requesteds @user.requested_ids
json.likedposts @user.posts_liked_ids