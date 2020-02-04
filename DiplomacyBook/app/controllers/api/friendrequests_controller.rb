class Api::FriendrequestsController < ApplicationController

    def index 
        @friendrequests = current_user.friend_requests 
        render :index
    end

    def create
        @friendrequest = Friendrequest.new(friend_request_params)
        if @friendrequest.save 
            render :show
        else
            render json: @friendrequest.errors.full_messages
        end

    end

    def destroy
        action = params[:friendrequest][:action]
        @friendrequest = Friendrequest.find(params[:id])
        if action == "decline" 
            @friendrequest.destroy
            render json: @friendrequest
        elsif action == "accept"
            sender_id = @friendrequest.sender_id
            receiver_id = @friendrequest.receiver_id
            ActiveRecord::Base.transaction do
                Friendship.create(user_id: sender_id, friend_id: receiver_id)
                Friendship.create(user_id: receiver_id, friend_id: sender_id)
                @friendrequest.destroy
            end
            render json: @friendrequest
        else
            render json: @friendrequest.errors.full_messages, status: 401
        end

    end

    def friend_request_params 
        params.require(:friendrequest).permit(:sender_id, :receiver_id, :action)
    end
end
