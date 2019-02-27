Rails.application.routes.draw do
  root to: "pages#root"
  get 'popular', action: :popular, controller: 'pages'
  get 'search', action: :search, controller: 'pages'
  get 'tv_show/:id', action: :tv_show, controller: 'pages'

end
