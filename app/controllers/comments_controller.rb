class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]
    before_action :authorize_request, only: :create
    # GET /users
    def index
      @comments = Post.all
  
      render json: @comments
    end
  
    # GET /users/1
    def show
      render json: @comments
    end
  
    # POST /users
    def create
      @comment = Comment.new(comment_params)
      @comment.user = @current_user
      if @comment.save
        @post = @comment.post 
       render json: @post, include: :comments, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /users/1
    def update
      if @comments.update(comment_params)
        render json: @comments
      else
        render json: @comments.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/1
    def destroy
      @comments.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_comment
        @comments = Comment.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def comment_params
        params.require(:comment).permit(:content, :post_id)
      end
  end
  

