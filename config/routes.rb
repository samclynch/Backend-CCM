Rails.application.routes.draw do
  root 'home#index'
  get 'home/about'
  resources :contacts, only: [:new, :create]
  resources :users
  resources :jobs
  post '/login', to: 'sessions#login'
  get '/authorized_user', to: 'user#show'
  get
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
