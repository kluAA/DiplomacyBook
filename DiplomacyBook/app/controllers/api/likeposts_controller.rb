class Api::LikepostsController < ApplicationController
    
    def show
        
    end

    def create
        @likepost = Likepost.new(likepost_params)
        @likepost.user_id = current_user.user_id
        if @likepost.save
            render :show
        else
            render json: @likepost.errors.full_messages
        end
    end

    def likepost_params
        params.require(:likepost).permit(:post_id)
    end
end
