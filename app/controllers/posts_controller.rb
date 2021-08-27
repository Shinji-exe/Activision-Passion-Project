class PostsController < ApplicationController
        before_action :set_posts, only: [:show, :update, :destroy]
        before_action :authorize_request, only: [:create, :update, :destroy]
        # before_action :authorize_request, except: 
        # GET /users
        def index
          @posts = Post.all
      
          render json: @posts
        end
      
        # GET /users/1
        def show
          render json: @posts, include: :comments
        end
      
        # POST /users
        def create
          @posts = Post.new(post_params)
          @posts.user = @current_user
          if @posts.save
            render json: @posts, status: :created
          else
            render json: @posts.errors, status: :unprocessable_entity
          end
        end
      
        # PATCH/PUT /users/1
        def update
          if @posts.update(post_params)
            render json: @posts
          else
            render json: @posts.errors, status: :unprocessable_entity
          end
        end
      
        # DELETE /users/1
        def destroy
          @posts.destroy
        end
      
        private
          # Use callbacks to share common setup or constraints between actions.
          def set_posts
            @posts = Post.find(params[:id])
          end
      
          # Only allow a trusted parameter "white list" through.
          def post_params
            params.require(:post).permit(:title, :imgURL, :content)
          end
      end
