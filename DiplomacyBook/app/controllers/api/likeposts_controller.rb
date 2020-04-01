class Api::LikepostsController < ApplicationController
    
    def show
        @post = Post.includes(:liked_users).find(params[:id])
        render :index
    end

    def create
        @likepost = Likepost.new(likepost_params)
        @likepost.user_id = current_user.id
        if @likepost.save
            render :show
        else
            render json: @likepost.errors.full_messages
        end
    end

    def destroy
        @likepost = Likepost.find_by(
            user_id: current_user.id, 
            post_id: params[:id]
        )
        @likepost.destroy
        render :show
    end

    def likepost_params
        params.require(:likepost).permit(:post_id)
    end
end
