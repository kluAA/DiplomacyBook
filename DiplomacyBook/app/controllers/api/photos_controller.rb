class Api::PhotosController < ApplicationController
    def show
        user = User.find(params[:id])
        @post_photos = user.posts.joins(:photo_attachment).with_attached_photo
        render :show
    end

end
