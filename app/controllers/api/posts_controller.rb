class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    if @post && @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:body)
  end
end
