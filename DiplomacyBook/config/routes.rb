Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :friendships, only:[:index]
    end
    resources :posts, only: [:create, :show, :destroy, :update, :index]
    resources :friendships, only:[:destroy]
    resource :session, only: [:create, :destroy]
    resources :friendrequests, only: [:create, :destroy, :index]
    resources :comments, only: [:create]
  end

  root to: 'static_pages#root'
end
 
