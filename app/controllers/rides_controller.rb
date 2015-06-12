class RidesController < ApplicationController
  before_filter :strava_setup, only:[:index, :show]
 
  # GET /rides
  # GET /rides.json
  def index
    @start_date = Time.local(2015, 5, 20)
    @end_date = Time.local(2015, 9, 15)
    @keyword = 'acking'
    @per_page_count = 100 #max is 200
    @rides = []

    @all_rides = @strava.list_athlete_activities(
      {'after'    => @start_date.to_i, 
       'before'   => @end_date.to_i,
       'per_page' => @per_page_count})

    #For each ride, see if the name contains the keyword
    # if so, strip the keyword out of the name, but keep the ride
    @all_rides.each { |ride| 
        if(ride['name'].include? @keyword)
          ride['name'].gsub!(@keyword, '') #remove the substring from the name
          @rides << ride #and keep the ride
        end
      }
    # @rides.reverse! # 'after' param flips the order, correct it if necessary
  end

  # GET /rides/1
  # GET /rides/1.json
  def show
    @ride = @strava.retrieve_an_activity(params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def strava_setup
      @strava = Strava::Api::V3::Client.new(:access_token => ENV['STRAVA_API_CLIENT_SECRET'])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ride_params
      params.require(:ride).permit(:strava_id)
    end
end
