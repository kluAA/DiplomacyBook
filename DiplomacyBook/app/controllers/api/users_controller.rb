class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            @errors = @user.errors
            render json: @user.errors, status: 401
        end
    end

    def show
        @user = User.includes(:friends, :requesters, :requesteds, :posts_liked).find(params[:id])
        render :show
      
    end

    def search
        query = params[:user][:query]
        @users = User.where("LOWER(first_name) ILIKE (?) OR LOWER(last_name) ILIKE (?)", "%#{query}%", "%#{query}%")
        render :index
    end

    def update
        @user = current_user
        if params[:user][:photo]
            @user.photo.purge
        elsif params[:user][:cover]
            @user.cover.purge
        end

        # @user.photo.attach(:photo)
        if @user.update(user_params)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end

    end

    def user_params
        params.require(:user).permit(:email, :first_name,
            :last_name, :birthday, :gender, :password, :photo, :cover,
            :bio, :position, :workplace, :relationship, :location, :school, :gradYear
        )
    end
end
