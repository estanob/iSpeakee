class Api::FeedbackCommentsController < ApplicationController
  def index
    @feedback_comments = FeedbackComment.all
    render :index
  end

  def show
    @feedback_comment = FeedbackComment.find_by(id: params[:id])
    render :show
  end

  def create
    @feedback_comment = FeedbackComment.new(feedback_comment_params)
    if @feedback_comment && @feedback_comment.save
      render :show
    else
      render json: @feedback_comment.errors.full_messages, status: 422
    end
  end

  def update
    @feedback_comment = FeedbackComment.find(params[:feedback_comment][:id])
    if @feedback_comment && @feedback_comment.update(feedback_comment_params)
      render :show
    else
      render json: @feedback_comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @feedback_comment = FeedbackComment.find_by(id: params[:id])
    @feedback_comment.destroy
    render 'api/feedback_comments'
  end

  private

  def feedback_comment_params
    params.require(:feedback_comment).permit(:teacher_id, :student_id, :lesson_id, :date_written, :body)
  end
end
