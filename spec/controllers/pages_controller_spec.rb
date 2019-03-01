require 'rails_helper'

RSpec.describe PagesController, type: :controller do

  describe "GET #root" do
    it "returns http success" do
      get :root
      expect(response).to have_http_status(:success)
    end
  end
  
  
  describe "GET #popular" do
    before do
      get :root
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
    
    it 'returns an array of tv shows' do
      get :popular
      expect(assigns(:popular)).to be_a_kind_of(Array)
    end
    
    it "returns a response body containing an expected amount of items" do
      get :popular
      response = JSON.parse(@response.body)
      expect(response.length).to eq(20)
    end
      
    it "returns a response body containing an array of hashes" do
      get :popular
      response = JSON.parse(@response.body)
      response.each do |item|
        expect(item).to be_a_kind_of(Hash)
      end
    end
     
    it "returns a response body containing an array of hashes with expected attributes" do
      get :popular
      response = JSON.parse(@response.body)
      expect(response[0].keys).to eq(["id", "name", "overview", "vote_average", "poster_image"])
    end
  end
  
  
  describe "GET #popular" do
    before do
      get :root
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
    
    it "returns an array of tv shows with given :query params" do
      get :search, params: { query: "Family Guy"}
      expect(assigns(:results)).to be_a_kind_of(Array)
    end
     
    it "returns a response body containing an array of hashes" do
      get :search, params: { query: "Suits"}
      response = JSON.parse(@response.body)
      response.each do |item|
        expect(item).to be_a_kind_of(Hash)
      end
    end
    
    it "returns a response body containing an array of hashes with expected attributes" do
      get :search, params: { query: "Rick and Morty"}
      response = JSON.parse(@response.body)
      expect(response[0].keys).to eq(["original_name", "name", "popularity", "origin_country", "vote_count", "first_air_date", "backdrop_path", "id", "vote_average", "overview", "poster_path"])
    end
     
    it "returns a response body containing expected attributes related to given :query params" do
      get :search, params: { query: "Rick and Morty"}
      response = JSON.parse(@response.body)
      expect(response[0]['name']).to eq("Rick and Morty")
    end
  end
  
  
  describe "GET #popular" do
    before do
      get :root
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
     
    it "returns a hash of tv show with give :id param" do
      get :tv_show,  params: {"id"=>"1399"}
      expect(assigns(:show)).to be_a_kind_of(Hash)
    end
     
    it "returns a response body containing a hash with expected attributes" do
      get :tv_show,  params: {"id"=>"1399"}
      response = JSON.parse(@response.body)
      expect(response.keys).to match_array(["backdrop_path", "created_by", "episode_run_time", "first_air_date", "genres", "homepage", "id", "in_production", "languages", "last_air_date", "name", "networks", "number_of_episodes", "number_of_seasons", "original_name", "origin_country", "overview", "popularity", "poster_path", "seasons", "status", "vote_average", "vote_count", "credits", "external_ids", "backdrop_image"])
    end
     
    it "returns a response body containing expected attributes related to given :id param" do
      get :tv_show, params: { "id"=>"1399" }
      response = JSON.parse(@response.body)
      expect(response['name']).to eq("Game of Thrones")
    end
  end

end