class Api::FriendshipsController < ApplicationController

    def index
        user = User.find(params[:user_id])
        @friends = user.friends
    end

    def destroy
    
        f1 = current_user.id 
        f2 = params[:id]
        @friendship_1 = Friendship.where(user_id: f1, friend_id: f2)[0]
        friendship_2 = Friendship.where(user_id: f2, friend_id: f1)[0]
 
        Friendship.destroy([@friendship_1.id, friendship_2.id])
        render :show
    end
end
