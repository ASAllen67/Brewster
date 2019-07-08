class BeersController < ApplicationController

	def index
		render json: Beer.all
	end

	def show
		render json: Beer.find(params[:id])
	end

	def top_beers
		render json: Beer.top_beers
	end

	def beer_reviews
		@beer = Beer.find(params[:id])
		render json: @beer.reviews
	end

	def beer_specs_stats
		@beer = Beer.find(params[:id])
		render json: {num_favorites: @beer.favorites.length, num_reviews: @beer.reviews.length }
	end

# BEER CLASS END
end
