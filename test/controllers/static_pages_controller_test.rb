require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase

  def setup
    @base_title = "Shawn's Bike Trip Across Canada"
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | #{@base_title}"
  end

  test "should get gear" do
    get :gear
    assert_response :success
    assert_select "title", "Gear | #{@base_title}"
  end

end
