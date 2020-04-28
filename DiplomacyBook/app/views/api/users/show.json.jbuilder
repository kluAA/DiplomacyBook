json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :gender, 
    :position, :workplace, :relationship, :location, :bio, :school, :gradYear


if @user.photo.attached? 
    json.photoUrl url_for(@user.photo)
else
    json.photoUrl image_url('default_profile.jpg')
end

if @user.cover.attached? 
    json.coverUrl url_for(@user.cover)
end

json.friends @user.friend_ids
json.requesters @user.requester_ids
json.requesteds @user.requested_ids
json.likedposts @user.posts_liked_ids