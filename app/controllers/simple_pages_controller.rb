class SimplePagesController < ApplicationController
  def index
  end

 # def landing_page
  #	@featured_product = Product.first
 # end

  def landing_page
  	# byebug
  	@products = Product.limit(params["limit"].to_i)
  end

end
