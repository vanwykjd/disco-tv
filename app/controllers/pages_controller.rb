class PagesController < ApplicationController
  
  def root
  end
  
  def popular
    @popular = tv.popular
    render json: @popular
  end

  def search
    @results = tv.search(params[:query])
    render json: @results.to_json
  end
  
  def tv_show
    @show = tv.detail(params['id'])
    render json: @show.to_json
  end
  
  
  private
    
  
  def tv
    @tv ||= Tv.new
  end
end
