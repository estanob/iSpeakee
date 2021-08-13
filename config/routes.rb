Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :index]
    resource :session, only: [:create, :destroy]
    resources :languages, only: [:index, :show, :create]
    resources :language_to_students, only: [:create, :index, :show]
    resources :follows, only: [:index, :create, :show]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
  end

  delete '/language_to_students', to: 'language_to_students#destroy'
  delete '/follows', to: 'follows#destroy'
end
