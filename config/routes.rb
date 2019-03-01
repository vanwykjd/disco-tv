Rails.application.routes.draw do
  
  get 'popular', action: :popular, controller: 'pages'
  get 'search', action: :search, controller: 'pages'
  get 'tv_show/:id', action: :tv_show, controller: 'pages'

  get '*path', to: 'pages#root'
  root "pages#root"

end
