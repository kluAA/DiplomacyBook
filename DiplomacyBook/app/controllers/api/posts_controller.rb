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
        @posts = user.posts.includes(:author, :liked_users, comments: [:author]).with_attached_photo 
        render :index
    end

    def index
        ids = current_user.friends.pluck(:id) 
        ids << current_user.id
        # @posts = Post.includes(author: { photo_attachment: :blob }).includes(:liked_users, comments: [author: { photo_attachment: :blob}]).where(author_id: ids)
        @posts = Post.includes(:author, :liked_users, comments: [:author]).with_attached_photo.where(author_id: ids)
        render :index
    end

    def destroy
        @post = current_user.authored_posts.find(params[:id])
        @post.destroy
        render 'api/posts/show'
    end

    def post_params
        params.require(:post).permit(:body, :user_id, :author_id, :photo)
    end
end
