class Api::LanguagesController < ApplicationController
  def index
    @languages = Language.all
    render :index
  end

  def show
    @language = Language.find_by(id: params[:id])
    render :show
  end

  def create
    @language = Language.new(language_params)
    if @language && @language.save
      render :show
    else
      render json: @language.errors.full_messages, status: 422
    end
  end

  private

  def language_params
    params.require(:language).permit(:name)
  end
end
