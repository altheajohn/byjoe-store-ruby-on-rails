Rails.application.routes.draw do
  
  resources :order_forms
  resources :products
  resources :users
  resources :reviews
  resources :inventories
  resources :categories
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Login / Logout Routes
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
end
