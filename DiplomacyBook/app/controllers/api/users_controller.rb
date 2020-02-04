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
        @user = User.find(params[:id])
        render :show
    end

    def update
        @user = current_user
        if @user.update(user_params)
        
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end

    end

    def user_params
        params.require(:user).permit(:email, :first_name,
            :last_name, :birthday, :gender, :password, :photo)
    end
end
