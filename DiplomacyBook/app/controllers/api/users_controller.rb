class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            @errors = @user.errors
            # render 'api/users/errors', status:401
            render json: @user.errors, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def user_params
        params.require(:user).permit(:email, :first_name,
            :last_name, :birthday, :gender, :password)
    end
end
