Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :index]
    resource :session, only: [:create, :destroy]
    resources :languages, only: [:index, :show, :create]
    resources :language_to_students, only: [:create, :index, :show]
    resources :teacher_to_students, only: [:create, :index, :show]
    resources :teacher_profiles, only: [:create, :index, :update, :show]
    resources :follows, only: [:index, :create, :show]
    resources :lessons, only: [:index, :create, :show]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :feedback_comments, only: [:index, :show, :create, :update, :destroy]
  end

  delete '/language_to_students', to: 'language_to_students#destroy'
  delete '/teacher_to_students', to: 'teacher_to_students#destroy'
  delete '/teacher_profiles', to: 'teacher_profiles#destroy'
  delete '/follows', to: 'follows#destroy'
  delete '/lessons', to: 'lessons#destroy'
end
