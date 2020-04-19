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
        unless params[:post][:all] == "true"
            @posts = user.posts.includes(:author, :liked_users, comments: [:author])
            .with_attached_photo
            .limit(6)
            .order(created_at: :desc).limit(6)
        else
            @posts = user.posts.includes(:author, :liked_users, comments: [:author])
            .with_attached_photo
            .order(created_at: :desc)
        end
        render :index
    end

    def index
        ids = current_user.friends.pluck(:id) 
        ids << current_user.id
        # @posts = Post.includes(author: { photo_attachment: :blob }).includes(:liked_users, comments: [author: { photo_attachment: :blob}]).where(author_id: ids)
        unless params[:post][:all] == "true"
        @posts = Post.includes(:author, :liked_users, comments: [:author])
            .with_attached_photo.where(author_id: ids)
            .limit(6)
            .order(created_at: :desc)
        else
            @posts = Post.includes(:author, :liked_users, comments: [:author])
            .with_attached_photo.where(author_id: ids)
            .order(created_at: :desc)
        end
        render :index
    end

    def update
        @post = current_user.authored_posts.includes(:author, :liked_users, comments: [:author])
            .with_attached_photo
            .find(params[:id])
        @post.body = params[:post][:body]
    
        if params[:post][:photo] == "purge"
            @post.photo.purge
        elsif params[:post][:photo].nil? 
            
        else params[:post][:photo].class != String
            @post.photo.attach(params[:post][:photo])
        end
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 401
        end
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
