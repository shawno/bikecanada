class RidesController < ApplicationController
  before_filter :strava_setup, only:[:index, :show]
 
  # GET /rides
  # GET /rides.json
  def index
    @rides = @strava.list_athlete_activities
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
