class Api::TeacherToStudentsController < ApplicationController
  def create
    @teacher_to_student = TeacherToStudent.new(teacher_to_student_params)
    if @teacher_to_student && @teacher_to_student.save
      render :show
    else
      render json: @teacher_to_student.errors.full_messages, status: 422
    end
  end

  def index
    @teacher_to_students = TeacherToStudent.all
    render :index
  end

  def show
    @teacher_to_student = TeacherToStudent.find_by(id: params[:id])
    render :show
  end

  def destroy
    @teacher_to_student = TeacherToStudent.find_by(delete_params)
    @teacher_to_student.destroy
    render :index
  end

  private

  def teacher_to_student_params
    params.require(:teacher_to_student).permit(:id, :teacher_id, :student_id)
  end

  def delete_params
    params.except(:teacher_to_student, :format).permit(:id, :teacher_id, :student_id)
  end
end
