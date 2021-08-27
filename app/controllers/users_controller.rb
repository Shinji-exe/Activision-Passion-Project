class UsersController < ApplicationController
        before_action :set_user, only: [:show, :update, :destroy]
        before_action :authorize_request, except: :create
        # GET /users
        # def index
        #   @users = User.all
      
        #   render json: @users
        # end
      
        # GET /users/1
        # def show
        #   render json: @user
        # end
      
        # POST /users
        def create
          @user = User.new(user_params)
          
          if @user.save
            @token = encode({id: @user.id})
      
            render json: {
              token: @token,
              user: @user.attributes.except('password_digest')
            }, status: :created
          else
            render json: @user.errors, status: :unprocessable_entity
          end
        end
      
        # PATCH/PUT /users/1
        def update
          if @users.update(user_params)
            render json: @users
          else
            render json: @users.errors, status: :unprocessable_entity
          end
        end
      
        # DELETE /users/1
        def destroy
          @users.destroy
        end
      
        private
          # Use callbacks to share common setup or constraints between actions.
          def set_user
            @users = User.find(params[:id])
          end
      
          # Only allow a trusted parameter "white list" through.
          def user_params
            params.require(:users).permit(:username, :email, :password)
          end

      end

