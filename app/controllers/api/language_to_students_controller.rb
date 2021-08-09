class Api::LanguageToStudentsController < ApplicationController

  def create
    @language_to_student = LanguageToStudent.new(language_to_student_params)
    if @language_to_student && @language_to_student.save
      render :show
    else
      render json: @language_to_student.errors.full_messages, status: 422
    end
  end

  def index
    @language_to_students = LanguageToStudent.all
    render :index
  end

  def show
    @language_to_student = LanguageToStudent.find_by(id: params[:id])
    render :show
  end

  def destroy
    @language_to_student = LanguageToStudent.find_by(delete_params)
    @language_to_student.destroy
    render :index
  end

  private

  def language_to_student_params
    params.require(:language_to_student).permit(:id, :language_id, :student_id)
  end

  def delete_params
    params.except(:language_to_student, :format).permit(:id, :language_id, :student_id)
  end
end
