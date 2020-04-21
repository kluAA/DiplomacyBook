class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment[:author_id] = current_user.id 
        if @comment.save 
            render :show
        else
            render json: @comment.errors.full_messages
        end
    end

    def delete
        @comment = current_user.comments.find(params[:id])
        @comment.destroy
        render :show
    end

    def update
        @comment = current_user.comments.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages
        end
    end

    def comment_params
        params.require(:comment).permit(:body, :author_id, :post_id)
    end
end
