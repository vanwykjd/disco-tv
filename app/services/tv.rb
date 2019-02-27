require 'ostruct'

class Tv
  
  def initialize
    @popular = Tmdb::TV.popular
    @config =  Tmdb::Configuration.new
  end
  
  def popular
    data = []
    @popular.map { |show|
      data.push(detail(show.id))
    }
    data.reverse
  end
  
  def search(name)
    Tmdb::TV.find(name)
  end
  
  def detail(id)
    struct_show Tmdb::TV.detail(id)
  end
  
  private 
  
  def struct_show(show)
    {
      backdrop_path: show["backdrop_path"],
      created_by: show["created_by"],
      episode_run_time: show["episode_run_time"],
      first_air_date: show["first_air_date"],
      genres: show["genres"],
      homepage: show["homepage"],
      id: show["id"],
      in_production: show["in_production"],
      languages: show["languages"],
      last_air_date: show["last_air_date"],
      name: show["name"],
      networks: show["networks"],
      number_of_episodes: show["number_of_episodes"],
      number_of_seasons: show["number_of_seasons"],
      original_name: show["original_name"],
      origin_country: show["origin_country"],
      overview: show["overview"],
      popularity: show["popularity"],
      poster_path: show["poster_path"],
      seasons: show["seasons"],
      status: show["status"],
      vote_average: show["vote_average"],
      vote_count: show["vote_count"],
      credits: show["credits"],
      external_ids: show["external_ids"],
      image: "#{@config.base_url}w200/#{show["poster_path"]}",
    }
  end
end