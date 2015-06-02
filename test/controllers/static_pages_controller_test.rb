require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | Shawn's Bike Trip Across Canada"
  end

  test "should get gear" do
    get :gear
    assert_response :success
    assert_select "title", "Gear | Shawn's Bike Trip Across Canada"
  end

end
