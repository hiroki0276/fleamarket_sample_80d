Rails.application.routes.draw do
  devise_for :users
  root 'items#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  

  resources :credit_cards, only: [:new, :create] do 
  end
end
