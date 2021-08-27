class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy, :create]
    # before_action :authorize_request, except: 
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
      @comments = Comment.new(comment_params)
      @comments.user = @current_user
      if @comments.save
       render json: @comments, status: :created
      else
        render json: @comments.errors, status: :unprocessable_entity
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
        @comments = User.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def comment_params
        params.require(:comment).permit(:content)
      end
  end
  

