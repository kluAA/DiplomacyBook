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

    def comment_params
        params.require(:comment).permit(:body, :author_id, :post_id)
    end
end
