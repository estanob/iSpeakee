class Api::LessonsController < ApplicationController
  def create
    @lesson = Lesson.new(
      student_id: params[:lesson][:student_id], 
      teacher_id: params[:lesson][:teacher_id],
      date: params[:lesson][:date],
      time: params[:lesson][:time],
    )
    @lesson.student_id = current_user.id

    if @lesson && @lesson.save
      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def index
    @lessons = Lesson.all
    render :index
  end

  def show
    @lesson = Lesson.find_by(id: params[:id])
    render :show
  end

  def destroy
    @lesson = Lesson.find_by(delete_params)
    @lesson.destroy
    render :show
  end

  private
  
  def delete_params
    params.except(:lesson, :format).permit(:id, :student_id, :teacher_id)
  end  
end
