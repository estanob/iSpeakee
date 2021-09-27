class Api::TeacherProfilesController < ApplicationController
   def index
    @teacher_profiles = TeacherProfile.all
    render :index
  end

  def show
    @teacher_profile = TeacherProfile.find_by(id: params[:id])
    render :show
  end

  def create
    @teacher_profile = TeacherProfile.new(teacher_profile_params)
    if @teacher_profile && @teacher_profile.save
      render :show
    else
      render json: @teacher_profile.errors.full_messages, status: 422
    end
  end

  def update
    @teacher_profile = TeacherProfile.find(params[:teacher_profile][:id])
    if @teacher_profile && @teacher_profile.update(teacher_profile_params)
      render :show
    else
      render json: @teacher_profile.errors.full_messages, status: 422
    end
  end

  private

  def teacher_profile_params
    params.require(:teacher_profile).permit(:teacher_id, :about_me, :me_as_teacher, :lessons_teaching_style)
  end
end
