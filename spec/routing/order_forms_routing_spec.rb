require "rails_helper"

RSpec.describe OrderFormsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/order_forms").to route_to("order_forms#index")
    end

    it "routes to #show" do
      expect(get: "/order_forms/1").to route_to("order_forms#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/order_forms").to route_to("order_forms#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/order_forms/1").to route_to("order_forms#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/order_forms/1").to route_to("order_forms#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/order_forms/1").to route_to("order_forms#destroy", id: "1")
    end
  end
end
