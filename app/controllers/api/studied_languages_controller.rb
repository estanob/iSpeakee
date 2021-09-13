class Api::StudiedLanguagesController < ApplicationController
  def create
    @studied_language = StudiedLanguage.new(studied_language_params)
    if @studied_language && @studied_language.save
      render :show
    else
      render json: @studied_language.errors.full_messages, status: 422
    end
  end

  def index
    @studied_languages = StudiedLanguage.all
    render :index
  end

  def show
    @studied_language = StudiedLanguage.find_by(id: params[:id])
    render :show
  end

  def destroy
    @studied_language = StudiedLanguage.find_by(delete_params)
    @studied_language.destroy
    render :index
  end

  private

  def studied_language_params
    params.require(:studied_language).permit(:id, :language_id, :student_id)
  end

  def delete_params
    params.except(:studied_language, :format).permit(:id, :language_id, :student_id)
  end
end
