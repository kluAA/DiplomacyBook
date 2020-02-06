class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages
        end
    end

    def show
        user = User.find(params[:id])
        @posts = user.posts.includes(:author) 
        render :index
    end


    def destroy
        @post = current_user.posts.find(params[:id])
        @post.destroy
        render 'api/posts/show'
    end

    def post_params
        params.require(:post).permit(:body, :user_id, :author_id)
    end
end
